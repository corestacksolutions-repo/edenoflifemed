
import { useCallback, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AdminContext } from '../../context/AdminContext';

const PAGE_SIZE = 5;

const API_ENDPOINTS = {
  appointments: '/api/admin/appointments',
  consultations: '/api/admin/consultations',
  contacts: '/api/admin/contacts',
};

const emptyRecords = {
  appointments: [],
  consultations: [],
  contacts: [],
};

const emptyErrors = {
  appointments: '',
  consultations: '',
  contacts: '',
};

const emptyLoading = {
  appointments: true,
  consultations: true,
  contacts: true,
};

const formatDate = (value) => {
  if (!value) return 'Not provided';

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return String(value);

  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

const formatMoney = (value) => {
  if (value === null || value === undefined || value === '') {
    return 'Not recorded';
  }

  const amount = Number(value);

  if (Number.isNaN(amount)) return String(value);

  return new Intl.NumberFormat('en-MW', {
    style: 'currency',
    currency: 'MWK',
    maximumFractionDigits: 2,
  }).format(amount);
};

const getRows = (response) => {
  const payload = response?.data;

  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.records)) return payload.records;

  return [];
};

const getErrorMessage = (error) => {
  if (error.response?.status === 401 || error.response?.status === 403) {
    return 'Your session may have expired. Please sign in again.';
  }

  return (
    error.response?.data?.message ||
    error.message ||
    'Unable to load these records.'
  );
};

const displayValue = (value) => {
  if (value === null || value === undefined || value === '') {
    return 'Not provided';
  }

  return String(value);
};

const StatusBadge = ({ status }) => {
  if (!status) {
    return (
      <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
        Status unavailable
      </span>
    );
  }

  const normalized = String(status).toLowerCase();

  let styles = 'bg-slate-100 text-slate-700';

  if (
    ['confirmed', 'completed', 'approved', 'paid'].includes(normalized)
  ) {
    styles = 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200';
  } else if (
    ['pending', 'unpaid', 'processing'].includes(normalized)
  ) {
    styles = 'bg-amber-50 text-amber-700 ring-1 ring-amber-200';
  } else if (
    ['cancelled', 'canceled', 'rejected', 'failed'].includes(normalized)
  ) {
    styles = 'bg-red-50 text-red-700 ring-1 ring-red-200';
  }

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${styles}`}
    >
      {String(status).replaceAll('_', ' ')}
    </span>
  );
};

const Detail = ({ label, children }) => (
  <div className="min-w-0">
    <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-400">
      {label}
    </p>

    <div className="break-words text-sm text-slate-700">
      {children}
    </div>
  </div>
);

const LongText = ({ label, value }) => {
  if (!value) return null;

  const text = String(value);
  const shouldExpand = text.length > 180;

  return (
    <div className="rounded-lg bg-slate-50 p-3">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="whitespace-pre-wrap break-words text-sm leading-6 text-slate-700">
        {shouldExpand ? `${text.slice(0, 180)}...` : text}
      </p>

      {shouldExpand && (
        <details className="mt-2">
          <summary className="w-fit cursor-pointer text-sm font-semibold text-blue-700 hover:text-blue-900">
            Read full message
          </summary>

          <p className="mt-3 whitespace-pre-wrap break-words text-sm leading-6 text-slate-700">
            {text}
          </p>
        </details>
      )}
    </div>
  );
};

const RecordCard = ({ record, index, type }) => {
  const isAppointment = type === 'appointments';
  const isConsultation = type === 'consultations';
  const isContact = type === 'contacts';

  const status = isAppointment
    ? record.appointment_status
    : isConsultation
      ? record.consultation_status
      : null;

  const reference = record.patient_reference;
  const recordId = record.id || record.uuid;
  const name = record.full_name || record.fullName;

  const date = record.date_time || record.created_at;

  const fee = isAppointment
    ? record.appointment_fee ?? 4000
    : isConsultation
      ? record.consultation_fee ?? 15000
      : null;

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 sm:p-5">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 font-semibold text-blue-700">
            {String(name || 'U').trim().charAt(0).toUpperCase()}
          </div>

          <div className="min-w-0">
            <h3 className="break-words font-semibold text-slate-900">
              {displayValue(name)}
            </h3>

            <p className="mt-1 break-all text-xs text-slate-500">
              {reference
                ? `Reference: ${reference}`
                : recordId
                  ? `Record ID: ${recordId}`
                  : `Record #${index + 1}`}
            </p>
          </div>
        </div>

        {status && <StatusBadge status={status} />}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <Detail label="Email">
          {record.email ? (
            <a
              href={`mailto:${record.email}`}
              className="break-all text-blue-700 hover:underline"
            >
              {record.email}
            </a>
          ) : (
            'Not provided'
          )}
        </Detail>

        <Detail label="Phone">
          {record.phone ? (
            <a
              href={`tel:${record.phone}`}
              className="text-blue-700 hover:underline"
            >
              {record.phone}
            </a>
          ) : (
            'Not provided'
          )}
        </Detail>

        <Detail label={isContact ? 'Submitted' : 'Appointment / record date'}>
          {formatDate(date)}
        </Detail>

        {!isContact && (
          <>
            <Detail label="Country">
              {displayValue(record.country)}
            </Detail>

            <Detail label="Amount paid">
              <span className="font-semibold text-slate-900">
                {formatMoney(record.paid_amount)}
              </span>
            </Detail>

            <Detail label="Expected fee">
              {formatMoney(fee)}
            </Detail>
          </>
        )}

        {isConsultation && (
          <Detail label="Purpose">
            {displayValue(record.purpose)}
          </Detail>
        )}
      </div>

      {isAppointment && (
        <div className="mt-4">
          <LongText label="Appointment notes" value={record.notes} />
        </div>
      )}

      {isConsultation && (
        <div className="mt-4">
          <LongText
            label="Consultation message"
            value={record.message}
          />
        </div>
      )}

      {isContact && (
        <div className="mt-4">
          <LongText label="Contact message" value={record.message} />
        </div>
      )}

      <div className="mt-4 border-t border-slate-100 pt-3">
        <p className="text-xs text-slate-400">
          Record created: {formatDate(record.created_at)}
        </p>
      </div>
    </article>
  );
};

const RecordSection = ({
  title,
  description,
  type,
  records,
  loading,
  error,
  visibleCount,
  onShowMore,
  onRetry,
}) => {
  const visibleRecords = records.slice(0, visibleCount);
  const remaining = records.length - visibleCount;

  return (
    <section className="scroll-mt-6" id={type}>
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              {title}
            </h2>

            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              {loading ? 'Loading' : records.length}
            </span>
          </div>

          <p className="mt-1 text-sm text-slate-500">{description}</p>
        </div>

        {!loading && !error && records.length > 0 && (
          <p className="text-xs text-slate-500">
            Showing {visibleRecords.length} of {records.length}
          </p>
        )}
      </div>

      {loading ? (
        <div className="space-y-3">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="animate-pulse rounded-xl border border-slate-200 bg-white p-5"
            >
              <div className="mb-4 h-4 w-1/3 rounded bg-slate-200" />
              <div className="mb-3 h-3 w-2/3 rounded bg-slate-100" />
              <div className="h-3 w-1/2 rounded bg-slate-100" />
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="font-semibold text-red-800">
            Could not load {title.toLowerCase()}
          </p>

          <p className="mt-1 break-words text-sm text-red-700">
            {error}
          </p>

          <button
            type="button"
            onClick={onRetry}
            className="mt-3 rounded-lg border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100"
          >
            Try again
          </button>
        </div>
      ) : records.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-10 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-400">
            —
          </div>

          <p className="mt-3 font-semibold text-slate-700">
            No {title.toLowerCase()} yet
          </p>

          <p className="mt-1 text-sm text-slate-500">
            New records will appear here when available.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {visibleRecords.map((record, index) => (
              <RecordCard
                key={
                  record.id ||
                  record.uuid ||
                  record.patient_reference ||
                  `${type}-${index}`
                }
                record={record}
                index={index}
                type={type}
              />
            ))}
          </div>

          {remaining > 0 && (
            <button
              type="button"
              onClick={() => onShowMore(false)}
              className="mt-4 w-full rounded-xl border border-blue-200 bg-white px-4 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Show more {title.toLowerCase()} ({remaining} remaining)
            </button>
          )}

          {visibleCount > PAGE_SIZE && (
            <button
              type="button"
              onClick={() => onShowMore(true)}
              className="mt-2 w-full rounded-xl px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100"
            >
              Collapse list
            </button>
          )}
        </>
      )}
    </section>
  );
};

const AllAppointments = () => {
  const { backendUrl, adminToken } = useContext(AdminContext);

  const [records, setRecords] = useState(emptyRecords);
  const [errors, setErrors] = useState(emptyErrors);
  const [loading, setLoading] = useState(emptyLoading);

  const [visibleCounts, setVisibleCounts] = useState({
    appointments: PAGE_SIZE,
    consultations: PAGE_SIZE,
    contacts: PAGE_SIZE,
  });

  const fetchRecords = useCallback(
    async (section) => {
      if (!adminToken) {
        setRecords((previous) => ({
          ...previous,
          [section]: [],
        }));

        setErrors((previous) => ({
          ...previous,
          [section]: 'Please sign in to access these records.',
        }));

        setLoading((previous) => ({
          ...previous,
          [section]: false,
        }));

        return;
      }

      setLoading((previous) => ({
        ...previous,
        [section]: true,
      }));

      setErrors((previous) => ({
        ...previous,
        [section]: '',
      }));

      try {
        const response = await axios.get(
          `${backendUrl}${API_ENDPOINTS[section]}`,
          {
            headers: {
              admintoken: adminToken,
            },
          }
        );

        setRecords((previous) => ({
          ...previous,
          [section]: getRows(response),
        }));
      } catch (error) {
        setErrors((previous) => ({
          ...previous,
          [section]: getErrorMessage(error),
        }));
      } finally {
        setLoading((previous) => ({
          ...previous,
          [section]: false,
        }));
      }
    },
    [backendUrl, adminToken]
  );

  const fetchAllRecords = useCallback(() => {
    fetchRecords('appointments');
    fetchRecords('consultations');
    fetchRecords('contacts');
  }, [fetchRecords]);

  useEffect(() => {
    fetchAllRecords();
  }, [fetchAllRecords]);

  const totalRecords =
    records.appointments.length +
    records.consultations.length +
    records.contacts.length;

  const anyLoading = Object.values(loading).some(Boolean);

  const updateVisibleCount = (section, collapse = false) => {
    setVisibleCounts((previous) => ({
      ...previous,
      [section]: collapse
        ? PAGE_SIZE
        : previous[section] + PAGE_SIZE,
    }));
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              Eden of Life · Administration
            </p>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Appointments &amp; Enquiries
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Review appointment bookings, consultation requests, and
              messages submitted through the website.
            </p>
          </div>

          <button
            type="button"
            onClick={fetchAllRecords}
            disabled={anyLoading}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span className={anyLoading ? 'animate-spin' : ''}>↻</span>
            {anyLoading ? 'Refreshing...' : 'Refresh records'}
          </button>
        </header>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Total records loaded
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900">
              {totalRecords}
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Across all three sections
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Appointment bookings
            </p>

            <p className="mt-2 text-3xl font-bold text-blue-700">
              {records.appointments.length}
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Expected fee: {formatMoney(4000)} each
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Consultation requests
            </p>

            <p className="mt-2 text-3xl font-bold text-blue-700">
              {records.consultations.length}
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Expected fee: {formatMoney(15000)} each
            </p>
          </div>
        </div>

        <nav className="mb-8 flex flex-wrap gap-2">
          {[
            { label: 'Appointments', id: 'appointments' },
            { label: 'Consultations', id: 'consultations' },
            { label: 'Contact messages', id: 'contacts' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="space-y-10">
          <RecordSection
            title="Appointment bookings"
            description="Scheduled appointments and their payment details."
            type="appointments"
            records={records.appointments}
            loading={loading.appointments}
            error={errors.appointments}
            visibleCount={visibleCounts.appointments}
            onShowMore={(collapse) =>
              updateVisibleCount('appointments', collapse)
            }
            onRetry={() => fetchRecords('appointments')}
          />

          <RecordSection
            title="Consultation requests"
            description="Consultation enquiries, stated purposes, and messages."
            type="consultations"
            records={records.consultations}
            loading={loading.consultations}
            error={errors.consultations}
            visibleCount={visibleCounts.consultations}
            onShowMore={(collapse) =>
              updateVisibleCount('consultations', collapse)
            }
            onRetry={() => fetchRecords('consultations')}
          />

          <RecordSection
            title="Contact messages"
            description="Messages submitted through the website contact form."
            type="contacts"
            records={records.contacts}
            loading={loading.contacts}
            error={errors.contacts}
            visibleCount={visibleCounts.contacts}
            onShowMore={(collapse) =>
              updateVisibleCount('contacts', collapse)
            }
            onRetry={() => fetchRecords('contacts')}
          />
        </div>

        <footer className="mt-12 border-t border-slate-200 py-5 text-center text-xs text-slate-400">
          Eden of Life · Administration dashboard
        </footer>
      </div>
    </main>
  );
};

export default AllAppointments;

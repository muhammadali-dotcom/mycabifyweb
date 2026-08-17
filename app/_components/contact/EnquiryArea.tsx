"use client";
import { useState } from "react";
import { fleetSizes, products, purposeOptions, type Purpose } from "../../_data/contact";

type FieldType = "text" | "email" | "tel" | "select" | "textarea" | "checkboxGroup";

type FieldDef = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  full?: boolean;
  options?: string[];
};

const fieldsByPurpose: Record<Exclude<Purpose, "support">, FieldDef[]> = {
  demo: [
    { name: "fullName", label: "Full name", type: "text", required: true },
    { name: "companyName", label: "Company name", type: "text", required: true },
    { name: "workEmail", label: "Work email", type: "email", required: true },
    { name: "phoneNumber", label: "Phone number", type: "tel", required: true },
    { name: "fleetSize", label: "Fleet size", type: "select", required: true, options: fleetSizes },
    { name: "products", label: "Products of interest", type: "checkboxGroup", options: products },
    { name: "contactTime", label: "Preferred contact time", type: "text" },
    { name: "wantToSee", label: "What would you like to see?", type: "textarea", full: true },
  ],
  quote: [
    { name: "fullName", label: "Full name", type: "text", required: true },
    { name: "companyName", label: "Company name", type: "text", required: true },
    { name: "workEmail", label: "Work email", type: "email", required: true },
    { name: "phoneNumber", label: "Phone number", type: "tel", required: true },
    { name: "fleetSize", label: "Fleet size", type: "select", required: true, options: fleetSizes },
    { name: "products", label: "Products required", type: "checkboxGroup", options: products },
    { name: "currentSystem", label: "Current system or process", type: "text" },
    { name: "additionalRequirements", label: "Additional requirements", type: "textarea", full: true },
  ],
  migration: [
    { name: "fullName", label: "Full name", type: "text", required: true },
    { name: "companyName", label: "Company name", type: "text", required: true },
    { name: "workEmail", label: "Work email", type: "email", required: true },
    { name: "phoneNumber", label: "Phone number", type: "tel", required: true },
    { name: "currentSystem", label: "Current system", type: "text", required: true },
    { name: "fleetSize", label: "Fleet size", type: "select", required: true, options: fleetSizes },
    { name: "products", label: "Products required", type: "checkboxGroup", options: products },
    { name: "dataToMigrate", label: "Data that may need migrating", type: "textarea", full: true },
    { name: "timeline", label: "Preferred timeline", type: "text" },
    { name: "mainReason", label: "Main reason for considering a change", type: "textarea", full: true },
  ],
};

const submitLabel: Record<Exclude<Purpose, "support">, string> = {
  demo: "Request My Demo",
  quote: "Request My Quote",
  migration: "Discuss My Move",
};

const introCopy: Record<Purpose, { title: string; intro: string }> = {
  demo: { title: "Tell us about your operation.", intro: "Share a few details and our team will contact you to arrange a personalised demo." },
  quote: { title: "Tell us what your fleet needs.", intro: "Share your fleet size and requirements and we’ll prepare a tailored quote." },
  migration: { title: "Tell us about your current setup.", intro: "Share your current system and what you’d like to change, and we’ll guide the move." },
  support: { title: "Already using MyCabify?", intro: "" },
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EnquiryArea() {
  const [purpose, setPurpose] = useState<Purpose>("demo");
  const [values, setValues] = useState<Record<string, string>>({});
  const [checkboxValues, setCheckboxValues] = useState<Record<string, string[]>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const fields = purpose === "support" ? [] : fieldsByPurpose[purpose];

  const selectPurpose = (p: Purpose) => {
    setPurpose(p);
    setErrors({});
    setStatus("idle");
  };

  const setValue = (name: string, v: string) => {
    setValues((prev) => ({ ...prev, [name]: v }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const toggleCheckbox = (name: string, option: string) => {
    setCheckboxValues((prev) => {
      const current = prev[name] ?? [];
      const next = current.includes(option)
        ? current.filter((x) => x !== option)
        : [...current, option];
      return { ...prev, [name]: next };
    });
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    for (const f of fields) {
      if (f.type === "checkboxGroup") continue;
      const value = values[f.name]?.trim() ?? "";
      if (f.required && !value) {
        nextErrors[f.name] = `${f.label} is required.`;
        continue;
      }
      if (f.type === "email" && value && !emailPattern.test(value)) {
        nextErrors[f.name] = "Enter a valid email address.";
      }
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      // TODO: wire this submit handler to the real enquiry API endpoint once
      // available, e.g. POST { purpose, ...values, ...checkboxValues } to
      // /api/enquiries. This currently only simulates a delay and does not
      // send data anywhere.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const copy = introCopy[purpose];

  return (
    <>
      <section id="enquiry" className="mc-section enquiry-selector">
        <p className="kicker">HOW CAN WE HELP? / CHOOSE ONE</p>
        <h2>Tell us what you need, and we’ll show you the right next step.</h2>
        <div className="purpose-grid" role="group" aria-label="Choose your enquiry purpose">
          {purposeOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className="purpose-option"
              aria-pressed={purpose === opt.id}
              onClick={() => selectPurpose(opt.id)}
            >
              <b>{opt.title}</b>
              <p>{opt.copy}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="mc-section enquiry-form-section">
        <div className="enquiry-panel">
          {purpose === "support" ? (
            <div className="support-only">
              <p className="kicker">EXISTING CUSTOMER SUPPORT</p>
              <h2>{copy.title}</h2>
              <p>
                Already using MyCabify? Please use your normal support channel for
                the fastest response.
              </p>
              <div className="support-contacts">
                <a href="tel:02084558888">020 8455 8888</a>
                <a href="mailto:info@mycabify.com">info@mycabify.com</a>
              </div>
            </div>
          ) : status === "success" ? (
            <div className="form-success">
              <b>Thank you — your enquiry details are ready.</b>
              <p>
                This is a preview environment: the form has not been sent to a
                live backend yet. Once the enquiry API is connected, submissions
                like this will reach our team directly.
              </p>
            </div>
          ) : (
            <form id="enquiry-form" onSubmit={handleSubmit} noValidate>
              <p className="kicker">{purposeOptions.find((p) => p.id === purpose)?.title.toUpperCase()}</p>
              <h2>{copy.title}</h2>
              <p className="intro">{copy.intro}</p>
              <div className="enquiry-fields">
                {fields.map((f) => (
                  <FormField
                    key={f.name}
                    field={f}
                    value={values[f.name] ?? ""}
                    checked={checkboxValues[f.name] ?? []}
                    error={errors[f.name]}
                    onChange={(v) => setValue(f.name, v)}
                    onToggle={(opt) => toggleCheckbox(f.name, opt)}
                  />
                ))}
                <p className="privacy-note field-full">
                  By submitting this form you agree to be contacted by MyCabify
                  about your enquiry. See our{" "}
                  <a href="/privacy-policy">Privacy Policy</a> for details.
                </p>
                {status === "error" && (
                  <p className="form-error-banner">
                    Something went wrong sending your enquiry. Please try again,
                    or contact us directly at info@mycabify.com.
                  </p>
                )}
                <button className="solid enquiry-submit" type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : `${submitLabel[purpose as Exclude<Purpose, "support">]} ↗`}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function FormField({
  field,
  value,
  checked,
  error,
  onChange,
  onToggle,
}: {
  field: FieldDef;
  value: string;
  checked: string[];
  error?: string;
  onChange: (v: string) => void;
  onToggle: (opt: string) => void;
}) {
  const id = `field-${field.name}`;
  const wrapperClass = `field ${field.full ? "field-full" : ""} ${error ? "has-error" : ""}`.trim();

  if (field.type === "checkboxGroup") {
    return (
      <div className={wrapperClass}>
        <label>{field.label}</label>
        <div className="checkbox-group">
          {field.options?.map((opt) => (
            <label key={opt}>
              <input
                type="checkbox"
                checked={checked.includes(opt)}
                onChange={() => onToggle(opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      </div>
    );
  }

  if (field.type === "select") {
    return (
      <div className={wrapperClass}>
        <label htmlFor={id}>
          {field.label}
          {field.required && <span className="req">*</span>}
        </label>
        <select
          id={id}
          value={value}
          required={field.required}
          aria-invalid={!!error}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="" disabled>
            Select {field.label.toLowerCase()}
          </option>
          {field.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {error && <span className="error-text">{error}</span>}
      </div>
    );
  }

  if (field.type === "textarea") {
    return (
      <div className={`${wrapperClass} field-full`}>
        <label htmlFor={id}>
          {field.label}
          {field.required && <span className="req">*</span>}
        </label>
        <textarea
          id={id}
          value={value}
          required={field.required}
          aria-invalid={!!error}
          onChange={(e) => onChange(e.target.value)}
        />
        {error && <span className="error-text">{error}</span>}
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={id}>
        {field.label}
        {field.required && <span className="req">*</span>}
      </label>
      <input
        id={id}
        type={field.type}
        value={value}
        required={field.required}
        aria-invalid={!!error}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
}

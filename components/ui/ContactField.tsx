interface FormFields {
    label: string;
    type?: string;
    name: string;
    placeholder: string;
}

const labelStyles = "block text-base mb-1";

const inputStyles = "block w-full bg-primary/10 placeholder:italic placeholder:opacity-80 rounded-xl px-4 py-3 mb-8 focus:outline-2 focus:outline-primary-light";

export const InputField = ({ label, type, name, placeholder }: FormFields ) => {
  return (
    <>
      <label className={`${labelStyles}`}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className={`${inputStyles}`}
      />
    </>
  );
}

export const MessageField = ({ label, name, placeholder }: FormFields) => {
  return (
    <>
      <label className="block text-base mb-1">{label}</label>
      <textarea
        name={name}
        placeholder={placeholder}
        required
        rows={5}
        className={`${inputStyles}`}
      />
    </>
  );
};
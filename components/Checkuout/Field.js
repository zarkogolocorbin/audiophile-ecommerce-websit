import { Field } from "formik";

export default function FieldComponent({ name, label, placeholder, type }) {
  return (
    <Field name={name}>
      {(props) => {
        const { field, form, meta } = props;
        return (
          <div>
            <div
              className={
                meta.touched && meta.error ? "label error-label" : "label"
              }
            >
              <label>{label}</label>
              {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
              ) : null}
            </div>
            <div
              className={
                meta.touched && meta.error ? "input error-input" : "input"
              }
            >
              <input
                placeholder={placeholder}
                type={type}
                id="name"
                autoComplete="off"
                {...field}
              />
            </div>
          </div>
        );
      }}
    </Field>
  );
}

// A spam trap. This field is positioned off-screen so real users never see or
// fill it, but automated bots tend to fill every input they find. The server
// rejects any submission where this arrives non-empty. Keep the field name in
// sync with `isBot()` in src/lib/guard.js.
const Honeypot = ({ value, onChange }) => (
  <div
    aria-hidden="true"
    style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
  >
    <label>
      Leave this field empty
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

export default Honeypot;

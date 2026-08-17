export function DemoModal({ close }: { close: () => void }) {
  return (
    <div className="overlay">
      <div className="modal">
        <button className="close" onClick={close}>
          ×
        </button>
        <p className="kicker">BOOK A PERSONALISED DEMO</p>
        <h2>Tell us about your operation.</h2>
        <p>
          Share a few details and our team will contact you to arrange the right
          conversation.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            close();
          }}
        >
          <input required placeholder="Full name" />
          <input required placeholder="Company name" />
          <div>
            <input required type="email" placeholder="Work email" />
            <input required placeholder="Phone number" />
          </div>
          <select defaultValue="">
            <option value="" disabled>
              Fleet size
            </option>
            <option>1–20 vehicles</option>
            <option>21–100 vehicles</option>
            <option>100+ vehicles</option>
          </select>
          <textarea placeholder="What would you like to improve?" />
          <button className="solid">Send enquiry ↗</button>
        </form>
      </div>
    </div>
  );
}

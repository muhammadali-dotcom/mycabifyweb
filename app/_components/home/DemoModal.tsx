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
          <label className="sr-only" htmlFor="demo-name">
            Full name
          </label>
          <input id="demo-name" required placeholder="Full name" />
          <label className="sr-only" htmlFor="demo-company">
            Company name
          </label>
          <input id="demo-company" required placeholder="Company name" />
          <div>
            <label className="sr-only" htmlFor="demo-email">
              Work email
            </label>
            <input
              id="demo-email"
              required
              type="email"
              placeholder="Work email"
            />
            <label className="sr-only" htmlFor="demo-phone">
              Phone number
            </label>
            <input id="demo-phone" required placeholder="Phone number" />
          </div>
          <label className="sr-only" htmlFor="demo-current-system">
            Current system
          </label>
          <input
            id="demo-current-system"
            placeholder="Current system (if any)"
          />
          <label className="sr-only" htmlFor="demo-fleet-size">
            Fleet size
          </label>
          <select id="demo-fleet-size" defaultValue="">
            <option value="" disabled>
              Fleet size
            </option>
            <option>1–20 vehicles</option>
            <option>21–100 vehicles</option>
            <option>100+ vehicles</option>
          </select>
          <label className="sr-only" htmlFor="demo-message">
            What would you like to improve?
          </label>
          <textarea
            id="demo-message"
            placeholder="What would you like to improve?"
          />
          <button className="solid">Send enquiry ↗</button>
        </form>
      </div>
    </div>
  );
}

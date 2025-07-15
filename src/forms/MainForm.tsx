function MainForm() {
  return (
    <form className="grid" action="">
      <label htmlFor="">
        Your Company Name <input type="text" />
      </label>
      <label htmlFor="">
        Nature of Business <input type="text" />
      </label>
      <label htmlFor="">
        Address <input type="text" />
      </label>
      <label htmlFor="">
        Postcode <input type="text" />
      </label>
      <label htmlFor="">
        Contact Name <input type="text" />
      </label>
      <label htmlFor="">
        Contact Phone <input type="text" />
      </label>
      <label htmlFor="">
        Email <input type="text" />
      </label>
      <label htmlFor="">
        Let’s talk about your idea <textarea name="" id=""></textarea>
      </label>
      <label htmlFor="">
        I want to protect my data <input type="checkbox" />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}

export default MainForm;

const AccountDetails = () => {
  return (
    <div className="woocommerce-MyAccount-content">
      <form
        className="woocommerce-EditAccountForm edit-account"
        action=""
        method="post"
      >
        <p className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
          <label htmlFor="account_first_name">
            First name&nbsp;<span className="required">*</span>
          </label>
          <input
            type="text"
            className="woocommerce-Input woocommerce-Input--text input-text"
            name="account_first_name"
            id="account_first_name"
            autoComplete="off"
            defaultValue=""
          />
        </p>
        <p className="woocommerce-form-row woocommerce-form-row--last form-row form-row-last">
          <label htmlFor="account_last_name">
            Last name&nbsp;<span className="required">*</span>
          </label>
          <input
            type="text"
            className="woocommerce-Input woocommerce-Input--text input-text"
            name="account_last_name"
            id="account_last_name"
            autoComplete="family-name"
            defaultValue=""
          />
        </p>
        <div className="clear" />
        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
          <label htmlFor="account_email">
            Email address&nbsp;<span className="required">*</span>
          </label>
          <input
            type="email"
            className="woocommerce-Input woocommerce-Input--email input-text"
            name="account_email"
            id="account_email"
            autoComplete="email"
            defaultValue="test@gmail.com"
          />
        </p>
        <div className="clear" />
        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
          <label htmlFor="birthdate">
            birthdate&nbsp;<span className="required">*</span>
          </label>
          <input
            type="date"
            className="woocommerce-Input woocommerce-Input--email input-text"
            name="birthdate"
            id="birthdate"
          />
        </p>
        <div className="clear" />
        <fieldset>
          <legend className="heading uppercase mb-30">Password change</legend>
          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <label htmlFor="password_current">
              Current password (leave blank to leave unchanged)
            </label>
            <span className="password-input">
              <input
                type="password"
                className="woocommerce-Input woocommerce-Input--password input-text"
                name="password_current"
                id="password_current"
                autoComplete="off"
              />
            </span>
          </p>
          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <label htmlFor="password_1">
              New password (leave blank to leave unchanged)
            </label>
            <span className="password-input">
              <input
                type="password"
                className="woocommerce-Input woocommerce-Input--password input-text"
                name="password_1"
                id="password_1"
                autoComplete="off"
              />
            </span>
          </p>
          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <label htmlFor="password_2">Confirm new password</label>
            <span className="password-input">
              <input
                type="password"
                className="woocommerce-Input woocommerce-Input--password input-text"
                name="password_2"
                id="password_2"
                autoComplete="off"
              />
            </span>
          </p>
        </fieldset>
        <p>
          <button
            type="submit"
            className="btn btn-lg woocommerce-Button button"
            name="save_account_details"
            value="Save changes"
          >
            Save changes
          </button>
        </p>
        <div className="clear" />
      </form>
    </div>
  );
};
export default AccountDetails;

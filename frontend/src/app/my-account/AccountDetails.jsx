import UserService from '@/services/user'
import { signOut } from 'next-auth/react'

const AccountDetails = ({ handleUserData, ...userData }) => {
  const handleSubmit = e => {
    e.preventDefault()

    const {
      currentPassword,
      newPassword,
      confirmNewPassword,
      name,
      lastname,
      email,
      birthdate,
    } = userData

    let newData = { name, lastname, email, birthdate }

    if (currentPassword || newPassword || confirmNewPassword) {
      if (!currentPassword) {
        return alert('make sure filling current password input')
      } else if (!newPassword) {
        return alert('make sure filling new password input')
      } else if (!confirmNewPassword) {
        return alert('make sure filling confirm new password input')
      } else if (newPassword !== confirmNewPassword) {
        return alert('make sure confirm password matches with new password')
      }
      newData = { ...newData, password: newPassword }
    }

    UserService.updateUser({
      userId: userData.userId,
      userData: newData,
    })
      .then(() => {
        alert('information updated successfuly, you have to sign in again')
        signOut()
      })
      .catch(() => alert('Something went wrong, try again'))
  }

  return (
    <>
      <form
        className="woocommerce-EditAccountForm edit-account"
        onSubmit={handleSubmit}
      >
        {/* name */}
        <p className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
          <label htmlFor="name">
            First name&nbsp;<span className="required">*</span>
          </label>
          <input
            type="text"
            className="woocommerce-Input woocommerce-Input--text input-text"
            name="name"
            id="name"
            required
            autoComplete="off"
            onChange={handleUserData}
            value={userData.name}
          />
        </p>

        {/* lastname */}
        <p className="woocommerce-form-row woocommerce-form-row--last form-row form-row-last">
          <label htmlFor="lastname">
            Last name&nbsp;<span className="required">*</span>
          </label>
          <input
            type="text"
            className="woocommerce-Input woocommerce-Input--text input-text"
            name="lastname"
            id="lastname"
            required
            autoComplete="off"
            onChange={handleUserData}
            value={userData.lastname}
          />
        </p>
        <div className="clear" />

        {/* email */}
        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
          <label htmlFor="email">
            Email address&nbsp;<span className="required">*</span>
          </label>
          <input
            type="email"
            className="woocommerce-Input woocommerce-Input--email input-text"
            name="email"
            id="email"
            required
            autoComplete="off"
            value={userData.email}
            onChange={handleUserData}
          />
        </p>
        <div className="clear" />

        {/* birthdate */}
        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
          <label htmlFor="birthdate">
            birthdate&nbsp;<span className="required">*</span>
          </label>
          <input
            type="date"
            className="woocommerce-Input woocommerce-Input--email input-text"
            name="birthdate"
            id="birthdate"
            required
            value={userData.birthdate}
            onChange={handleUserData}
          />
        </p>
        <div className="clear" />
        <fieldset>
          <legend className="heading uppercase mb-30">Password change</legend>
          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <label htmlFor="currentPassword">
              Current password (leave blank to leave unchanged)
            </label>
            <span className="password-input">
              <input
                type="password"
                className="woocommerce-Input woocommerce-Input--password input-text"
                name="currentPassword"
                id="currentPassword"
                autoComplete="off"
                value={userData.currentPassword}
                onChange={handleUserData}
              />
            </span>
          </p>
          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <label htmlFor="newPassword">
              New password (leave blank to leave unchanged)
            </label>
            <span className="password-input">
              <input
                type="password"
                className="woocommerce-Input woocommerce-Input--password input-text"
                name="newPassword"
                id="newPassword"
                autoComplete="off"
                value={userData.newPassword}
                onChange={handleUserData}
              />
            </span>
          </p>
          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <label htmlFor="confirmNewPassword">Confirm new password</label>
            <span className="password-input">
              <input
                type="password"
                className="woocommerce-Input woocommerce-Input--password input-text"
                name="confirmNewPassword"
                id="confirmNewPassword"
                autoComplete="off"
                value={userData.confirmNewPassword}
                onChange={handleUserData}
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
    </>
  )
}
export default AccountDetails

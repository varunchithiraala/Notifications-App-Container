const Notification = props => {
  //  Write your code here.
  const {className, iconUrl, message} = props;
  const containerClassName = `notification-container ${className}`;
  return (
    <div className={containerClassName}>
        <img src={iconUrl} className="icon-img" />
        <p className="message">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.   
  <div className="notifications-container">
      <h1 class="notifications-heading">Notifications</h1>
      <div className="notifications-list-container">
          <Notification 
            className="information-bg-color"
            iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
            message="Information Message"
          />
          <Notification 
            className="success-bg-color"
            iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            message="Success Message"
          />
          <Notification 
            className="warning-bg-color"
            iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
            message="Warning Message"
          />
          <Notification 
            className="errorr-bg-color"
            iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
            message="Error Message"
          />
      </div>
  </div>
);

ReactDOM.render(element, document.getElementById('root'));

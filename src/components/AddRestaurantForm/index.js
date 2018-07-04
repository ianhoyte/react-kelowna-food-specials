import React, { Component } from 'react';

import { auth } from '../../firebase';
import { db } from '../../firebase';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  restaurantName: '',
  phone: '',
  email: '',
  website: '',
  address: '',
  sunday_hours: '',
  monday_hours: '',
  tuesday_hours: '',
  wednesday_hours: '',
  thursday_hours: '',
  friday_hours: '',
  saturday_hours: ''
};

class AddRestaurantForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {

    const {
      restaurantName,
      phone,
      email,
      website,
      address,
      sunday_hours,
      monday_hours,
      tuesday_hours,
      wednesday_hours,
      thursday_hours,
      friday_hours,
      saturday_hours,

    } = this.state;

    db.doCreateRestaurant(restaurantName)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    db.doCreateDetails(restaurantName, phone, email, website, address)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    db.doCreateHours(restaurantName, sunday_hours, monday_hours, tuesday_hours, wednesday_hours, thursday_hours, friday_hours, saturday_hours )
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
   
    const {
      restaurantName,
      phone,
      email,
      website,
      address,
      sunday_hours,
      monday_hours,
      tuesday_hours,
      wednesday_hours,
      thursday_hours,
      friday_hours,
      saturday_hours,

    } = this.state;

    return (
      <form onSubmit={this.onSubmit}>

        <h4>Restaurant Details</h4>
        <div className="input-container">
            <label>Restaurant Name</label>
            <input
              value={restaurantName}
              type="text"
              placeholder="Restaurant Name"
              onChange={event => this.setState(updateByPropertyName('restaurantName', event.target.value))}
            />
        </div>
        
        <div className="input-container">
            <label>Phone Number</label>
            <input
              value={phone}
              type="text"
              placeholder="Phone Number"
              onChange={event => this.setState(updateByPropertyName('phone', event.target.value))}
            />
        </div>
        <div className="input-container">
            <label>Email Address</label>
            <input
              value={email}
              type="text"
              placeholder="Email Address"
              onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
            />
        </div>
        <div className="input-container">
            <label>Website</label>
            <input
              value={website}
              type="text"
              placeholder="Website"
              onChange={event => this.setState(updateByPropertyName('website', event.target.value))}
            />
        </div>
        <div className="input-container">
            <label>Address</label>
            <input
              value={address}
              type="text"
              placeholder="Address"
              onChange={event => this.setState(updateByPropertyName('address', event.target.value))}
            />
        </div>

        <h4>Hours</h4>

        <div className="input-container">
            <label>Sunday</label>
            <input
              value={sunday_hours}
              type="text"
              placeholder="Sunday"
              onChange={event => this.setState(updateByPropertyName('sunday_hours', event.target.value))}
            />
        </div>

        <div className="input-container">
            <label>Monday</label>
            <input
              value={monday_hours}
              type="text"
              placeholder="Monday"
              onChange={event => this.setState(updateByPropertyName('monday_hours', event.target.value))}
            />
        </div>

        <div className="input-container">
            <label>Tuesday</label>
            <input
              value={tuesday_hours}
              type="text"
              placeholder="Tuesday"
              onChange={event => this.setState(updateByPropertyName('tuesday_hours', event.target.value))}
            />
        </div>

        <div className="input-container">
            <label>Wednesday</label>
            <input
              value={wednesday_hours}
              type="text"
              placeholder="Wednesday"
              onChange={event => this.setState(updateByPropertyName('wednesday_hours', event.target.value))}
            />
        </div>

        <div className="input-container">
            <label>Thursday</label>
            <input
              value={thursday_hours}
              type="text"
              placeholder="Thursday"
              onChange={event => this.setState(updateByPropertyName('thursday_hours', event.target.value))}
            />
        </div>

        <div className="input-container">
            <label>Friday</label>
            <input
              value={friday_hours}
              type="text"
              placeholder="Friday"
              onChange={event => this.setState(updateByPropertyName('friday_hours', event.target.value))}
            />
        </div>

        <div className="input-container">
            <label>Saturday</label>
            <input
              value={saturday_hours}
              type="text"
              placeholder="Saturday"
              onChange={event => this.setState(updateByPropertyName('saturday_hours', event.target.value))}
            />
        </div>

        <button type="submit">
          Add Restaurant
        </button>

      </form>
    );
  }
}

export default AddRestaurantForm;
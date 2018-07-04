import { db } from './firebase';
import { storage } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });




export const doCreateRestaurant = (name) =>
  db.ref(`restaurants/${name}`).set({
  });

export const doCreateDetails = (name, phone, email, website, address) =>
  db.ref(`restaurants/${name}/details/`).set({
    phone,
    email,
    website,
    address
  });

export const doCreateHours = (name, sunday_hours, monday_hours, tuesday_hours, wednesday_hours, thursday_hours, friday_hours, saturday_hours) =>
  db.ref(`restaurants/${name}/hours/`).set({
      sunday_hours,
      monday_hours,
      tuesday_hours,
      wednesday_hours,
      thursday_hours,
      friday_hours,
      saturday_hours,
  });



export const onceGetUsers = () =>
  db.ref('users').once('value');

export const getSiteTitle = () => db.ref('flamelink/environments/production/content/siteTitle/en-US/field_1525896615474').once('value');

/**
 *	Get Firebase Storage Link for Images
 */
export const getImage = (image) =>
   storage.ref(`${image}`).getDownloadURL().then((url) => {
    	return url;
    });
  

// Other db APIs ...

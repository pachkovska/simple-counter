# Simple Counter App 

User of the app is able to input range of numbers to produce icrementing and dicrementing buttons, that will allow user to change the value of a number.

### Functionality Requirements: 

1. User should not be bale to enter anything but digits into the field. If user tries to enter any letter or special characters, user sees an alert on top of the page. 
User has to click "OK" for an alert to go away. Alert is illustrated in the screenshot below.

![Screen Shot 2020-04-05 at 12 51 47 PM](https://user-images.githubusercontent.com/19315082/78508660-6df98180-773d-11ea-99fe-63538db1547b.png)

2. If user enters higher starting value then ending value or enters lower ending value than starting value, user see error toast in red color located above the input fields. Error toast is illustrated in the screenshot below. 

![Screen Shot 2020-04-05 at 12 52 04 PM](https://user-images.githubusercontent.com/19315082/78508758-23c4d000-773e-11ea-9b47-2be66185e7fc.png)

3. Input fields accept any numbers between 1 and 20 inclusive.
Once qualifying values have been enterred into the fileds, user sees buttons that get populated according user enterred range as demonstrated in the screenshot below.

![Screen Shot 2020-04-05 at 12 52 35 PM](https://user-images.githubusercontent.com/19315082/78508918-3a1f5b80-773f-11ea-9651-0b0d9b7aa182.png)

4. User is able to chage values at any time, and see change of the outcome accordingly.

5. App does not have reset functionality, in order to reset values, user can either delete them of refresh the browser page.

### Stylistic Requirements:

* Error Toast:
  1. Font-size : 13px;
  2. Background-color: #ffdfdf;
  3. Font-color: #ff0000;
  
* Value Input Fields:
  1. Fields have a placeholder of "0" if there is no user input;
  2. Input fields have a fixed width of 100px;
  3. Input fields have a fixed height of 20px;
  
* Buttons:
  1. Buttons have a fixed height of 20px;
  2. Buttons have a fixed width of 60px;
  3. Background-color: #6fbad5;
  4. Upon hovering over button background-color changes to #8dc9de;
  5. Addition buttons are displayed in ascending order;
  6. Subtraction buttons are displayed in descending order.



export class Booking {
  constructor(show, date) {
    this._show = show;
    this._date = date;
  }

  get isPeakDay() {
    return this._date.getTime() === new Date(2019, 11, 29).getTime();
  }

  get hasTalkback() {
    return this._premiumDelegate
      ? this._premiumDelegate.hasTalkback
      : this._show.hasOwnProperty("talkback") && !this.isPeakDay;
  }

  get basePrice() {
    return this._premiumDelegate
      ? this._premiumDelegate.basePrice
      : this._privateBasePrice;
  }

  get _privateBasePrice() {
    let result = this._show.price;
    if (this.isPeakDay) result += Math.round(result * 0.15);
    return result;
  }

  _bePremium(extras) {
    this._premiumDelegate = new PremiumBookingDelegate(this, extras);
  }

  get hasDinner() {
    return this._premiumDelegate ? this._premiumDelegate.hasDinner : undefined;
  }
}

// export class PremiumBooking extends Booking {
//   constructor(show, date, extras) {
//     super(show, date);
//     this._extras = extras;
//   }
// }

export function createBooking(show, date) {
  return new Booking(show, date);
}

export function createPremiumBooking(show, date, extras) {
  const result = new Booking(show, date);
  result._bePremium(extras);
  return result;
}

class PremiumBookingDelegate {
  constructor(hostBooking, extras) {
    this._host = hostBooking;
    this._extras = extras;
  }

  get hasTalkback() {
    return this._host._show.hasOwnProperty("talkback");
  }

  get basePrice() {
    return Math.round(this._host._privateBasePrice + this._extras.premiumFee);
  }

  get hasDinner() {
    return this._extras.hasOwnProperty("dinner") && !this.isPeakDay;
  }
}

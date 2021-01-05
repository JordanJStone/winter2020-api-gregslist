
export default class House {
  constructor({ id, bedrooms, bathrooms, levels, imgUrl, year, price, description }) {
    console.log("MODEL: constructor", 3)
    this.id = id
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.levels = levels
    this.imgUrl = imgUrl
    this.year = year
    this.price = price
    this.description = description
  }

  get Template() {
    return `
    <div class="col-md-4 col-6 mt-3">
    <div class="card">
        <img class="card-img-top" src="${this.imgUrl}" alt="">
        <div class="card-body">
            <h4 class="card-title">Year: ${this.year} - Price: ${this.price}</h4>
            <p class="card-text">Floors: ${this.levels}</p>
            <p class="card-text">Bedrooms: ${this.bedrooms} - Bathrooms: ${this.bathrooms}</p>
            <p class="card-text">${this.description}</p>
            <div class="text-right">
            <button type="button" class="btn btn-success" onclick="app.housesController.bid('${this.id}', $'${this.price += 2000}')">Bid</button>
                <button type="button" class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
            </div>
        </div>
    </div>
    </div>
        `
  }
}
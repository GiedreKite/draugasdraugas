

export default function Chart () {
    return (
      <main className="container">
        <div className="py-5 text-center">
          <h2>Paslaugų apmokėjimas</h2>
          <h6 className="lead">Žemiau yra jūsų pasirinktų paslaugų krepšelis, bei reikalinga informacija apmokėjimui.</h6>
        </div>
    
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Jūsų krepšelis</span>
              <span className="badge bg-primary rounded-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Paslaugos pavadinimas</h6>
                  <small className="text-body-secondary"></small>
                </div>
                <span className="text-body-secondary">20 Eur</span>
              </li>
           
              <li className="list-group-item d-flex justify-content-between">
                <span>Viso (Eur)</span>
                <strong>$20</strong>
              </li>
            </ul>
    
            <form className="card p-2">
            <h6>Jūsų pageidavimai: </h6>
            <p className="form-control">Jūsų pageidavimai: </p>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Įveskite pageidavimus..." />
                <button type="submit" className="btn btn-secondary">Patvirtinti</button>
              </div>
            </form>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Paslaugos pirkėjas</h4>
            <form className="needs-validation" novalidate="">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label for="firstName" className="form-label">Vardas</label>
                  <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                  <div className="invalid-feedback">
                    Reikalingas vartotojo vardas
                  </div>
                </div>
                
    
                <div className="col-sm-6">
                  <label for="lastName" className="form-label">Pavardė</label>
                  <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                  <div className="invalid-feedback">
                   Reikalinga vartotojo pavardė
                  </div>
                </div>
    
                <div className="col-12">
                  <label for="username" className="form-label">Vartotojo vardas</label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input type="text" className="form-control" id="username" placeholder="Username" required="" />
                  <div className="invalid-feedback">
                  Reikalingas vartotojo e-paštas
                    </div>
                  </div>
                </div>
              </div>

    
              <hr className="my-4" />
    
              <h4 className="mb-3">Apmokėjimas</h4>
    
              <div className="my-3">
                <div className="form-check">
                  <input id="credit" name="paymentMethod" type="radio" className="form-check-input"  required="" />
                  <label className="form-check-label" for="credit">Kreditinė kortelė</label>
                </div>
                <div className="form-check">
                  <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                  <label className="form-check-label" for="debit">Debetinė kortelė</label>
                </div>
                <div className="form-check">
                  <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                  <label className="form-check-label" for="paypal">PayPal</label>
                </div>
              </div>
    
              <div className="row gy-3">
                <div className="col-md-6">
                  <label for="cc-name" className="form-label">Kortelės pavadinimas</label>
                  <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                  <small className="text-body-secondary">Pilnas vardas</small>
                  <div className="invalid-feedback">
                    Kortelės savininko vardas ir pavardė
                  </div>
                </div>
    
                <div className="col-md-6">
                  <label for="cc-number" className="form-label">Kortelės numeris: </label>
                  <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                  <div className="invalid-feedback">
                   Kortelės numeris:
                  </div>
                </div>
    
                <div className="col-md-3">
                  <label for="cc-expiration" className="form-label">Galiojimas</label>
                  <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                  <div className="invalid-feedback">
                    Kortelės galiojimo terminas: 
                  </div>
                </div>
    
                <div className="col-md-3">
                  <label for="cc-cvv" className="form-label">CVV</label>
                  <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                  <div className="invalid-feedback">
                    Kortelės apsaugos kodas
                  </div>
                </div>
              </div>
    
              <hr className="my-4" />
    
              <button className="w-100 btn btn-primary btn-lg" type="submit">Tęsti apmokėjimą</button>
              </form>
          </div>
        </div>
      </main>
    
    
    )
    }
    
    
      
import React from 'react'
import { Card } from 'react-bootstrap'


export default function VisaCard() {

  return(
    <>
    
    <Card className="dashboard-card d-flex flex-column justify-content-between">
              <div className="visa-card">
                <div className="top">
                  <div>
                    <small>VISA</small>
                    <div>PREMIUM ACCOUNT</div>
                  </div>
                  <div>
                    <small>5789 **** **** 2847</small>
                  </div>
                </div>
                <div className="bottom">
                  <div>
                    <small>Card holder</small><br />
                    <span className="fw-bold">Wendo ceo</span>
                  </div>
                  <div>
                    <small>Expire date</small><br />
                    <span className="fw-bold">06/21</span>
                  </div>
                </div>
              </div>
              <div className="balance-section">
                <h6>$4,050,12,300</h6>
                <small>balance</small>
              </div>
            </Card>
    
    </>
  )
}

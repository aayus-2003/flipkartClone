
let login = document.getElementById('login')
let login_logo = document.getElementById('login_logo')
let login_btn = document.getElementById('login_btn')

login.addEventListener('click',(e)=>{
    login_logo.classList.toggle('fa-chevron-down')
    login_logo.classList.toggle('fa-chevron-up')
    login_btn.classList.toggle('block') 
})

let threeDotsOpen = document.getElementById('dots_open')
let threeDotsContainer = document.getElementById('dots_container')
console.log(threeDotsOpen);


threeDotsContainer.addEventListener('click', () => {
    threeDotsOpen.classList.toggle('none')
})


let newproductContainer = document.getElementById('newproductContainer') // trigger karena hai hide karne ke liyee
let trigger = document.querySelectorAll('.trigger')
console.log(trigger)
let hideex = document.querySelectorAll('.hideex')
// console.log(hideex) 


trigger.forEach((value) => {

    
    value.addEventListener('click', (e) => {
        hideex[0].classList.add('means')
        hideex[1].classList.add('means')
        hideex[2].classList.add('means')
        hideex[3].classList.add('means')
        newproductContainer.classList.remove('hide')

        let obj = [{
            name : 'Moniter',
            price : '₹ ₹6,599',
            img : 'img /moniter.webp'
        }]
        
        if(e.target.innerHTML == 'printers'){
            obj = [{
                name : 'printer',
                price : '₹3,999',
                img : 'img /printer.webp'
            }]
        }
        else if(e.target.innerHTML == 'SandDisk sDDDC3'){
            obj = [{
                name : 'SandDisk sDDDC3',
                price : '₹1,109',
                img : 'img /pendrive.webp'
            }]
        }
        else if(e.target.innerHTML == 'Wireless Mouse And Keyboard'){
            obj = [{
                name : 'Wireless Mouse And Keyboard',
                price : '₹3,999',
                img : 'img /keyboard.webp'
            }]
        }
        else if(e.target.innerHTML == 'Moniter'){
            obj = [{
                name : 'Moniter',
                price : '₹ ₹6,599',
                img : 'img /moniter.webp'
            }]
        }
        else if(e.target.innerHTML == 'Top Mirroless Cameras'){
            obj = [{
                name : 'Top Mirroless Cameras',
                price : '₹79,000',
                img : 'img /camera.webp'
            }]
        }
        else if(e.target.innerHTML == 'Power Bank'){
            obj = [{
                name : 'Power Bank',
                price : '₹1,099',
                img : 'img /powerbank.webp'
            }]
        }
        else if(e.target.innerHTML == 'HRX XTRM MTB 500 85%'){
            obj = [{
                name : 'THRX XTRM MTB 500 85%',
                price : '₹6,000',
                img : 'img /cycle.webp'
            }]
        }
        else if(e.target.innerHTML == 'PNeuherbs Green Coffee Beans'){
            obj = [{
                name : 'PNeuherbs Green Coffee Beans',
                price : '₹1,090',
                img : 'img /coffee.webp'
            }]
        }
        else if(e.target.innerHTML == 'feet Big size soft Teddy Bear'){
            obj = [{
                name : 'feet Big size soft Teddy Bear',
                price : '₹1,099',
                img : 'img /teddy.webp'
            }]
        }
        else if(e.target.innerHTML == 'Happilo Californian Almonds'){
            obj = [{
                name : 'Happilo Californian Almonds',
                price : '₹205',
                img : 'img /badam (1).webp'
            }]
        }
        else if(e.target.innerHTML == 'fCASIO LK-S250 KL11A'){
            obj = [{
                name : 'fCASIO LK-S250 KL11A',
                price : '₹11,800',
                img : 'img /piano.webp'
            }]
        }
        else if(e.target.innerHTML == 'Auto Inclination Treadmill with'){
            obj = [{
                name : 'Auto Inclination Treadmill with',
                price : '₹71,999',
                img : 'img /trandmil.webp'
            }]
        }
        else if(e.target.innerHTML == 'Acoustic Guitar Linden Wood'){
            obj = [{
                name : 'Acoustic Guitar Linden Wood',
                price : '₹1,999',
                img : 'img /guitar.webp'
            }]
        }
        else if(e.target.innerHTML == 'MUSCLEBLAZE High Protein Muesli'){
            obj = [{
                name : 'MUSCLEBLAZE High Protein Muesli',
                price : '₹699',
                img : 'img /mb-fit.webp'
            }]
        }
        else if(e.target.innerHTML == 'Battlestar Adjustable Hand Grip'){
            obj = [{
                name : 'Battlestar Adjustable Hand Grip',
                price : '₹149',
                img : 'img /handgrip.webp'
            }]
        }
        else if(e.target.innerHTML == 'Saffola Masala Oats'){
            obj = [{
                name : 'Saffola Masala Oats',
                price : '₹167',
                img : 'img /oats.webp'
            }]
        }
        else if(e.target.innerHTML == 'Leosportz 2 Pack Brace'){
            obj = [{
                name : 'Leosportz 2 Pack Brace',
                price : '₹269',
                img : 'img /leg.webp'
            }]
        }
        else if(e.target.innerHTML == 'Biology Simplified Ncert Class XII'){
            obj = [{
                name : 'Biology Simplified Ncert Class XII',
                price : '₹150',
                img : 'img /book.webp'
            }]
        }
        else if(e.target.innerHTML == 'PROWL by TIGER SHROFF Boost'){
            obj = [{
                name : 'PROWL by TIGER SHROFF Boost',
                price : '₹159',
                img : 'img /bottle.webp'
            }]
        }
        else if(e.target.innerHTML == 'Saffola Peanut Butter'){
            obj = [{
                name : 'Saffola Peanut Butter',
                price : '₹190',
                img : 'img /penutButter.webp'
            }]
        }


        newproductContainer.innerHTML = `
    
        <div class="productFirstChild">
          <div class="forty">
              <div class="fortyimagecontainer">
                  <img src="${obj[0].img}" class="fortyimagecontainerimg">
              </div>
          </div>
          <div class="sixty">
              <div class="fifty">
                  <div class="productname">
                      <span class="productnamesize">${obj[0].name}</span>
                  </div>
                  <div class="productprice">
                      <span class="productpricedirection">${obj[0].price}</span>
                  </div>
                  <div class="info">
                      <div class="top">
        <div class="pixeltop"> # Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C <br></div>
        
        <div class="pixeltop"> # Bank Offer 10% off up to ₹1,250 on HDFC Bank Credit Card Transactions. Min Txn Value: ₹7,499T&C <br></div>
        
        <div class="pixeltop"> # Bank Offer 10% off up to ₹1,500 on HDFC Bank Credit Card EMI Transactions. Min Txn Value: ₹7,499T&C <br></div>
        
        <div class="pixeltop"> # Special PriceGet extra 24% off (price inclusive of cashback/coupon)T&C</div>
        
        <div class="pixeltop"> # Buy together get 3% OFFT&C</div>
                      </div>
        
                  </div>
              </div>
              <div class="fifty productdescriptionflex">
                  <div class="ProductDescription">
                      <div class="productdescriptionflexTag">
                          <span class="productdescriptionflexTagspan">Product Description</span>
                      </div>
                      <div class="productdescriptionflexText">
                          <div class="smalldescriptiontext">Engrossing Viewing Experience
                              Featuring a 1920x1080p resolution and 16:9 HDR display, the BenQ MOBIUZ EX240N Gaming Monitor offers attractive visuals. Integrated with the BenQ HDRi technology and up to 2.5 W inbuilt speakers, this gaming monitor lets you explore new dimensions with a completely immersive, all-encompassing audio-visual experience.</div>
                      </div>   
                  </div>
              </div>
          </div>
        </div>
        
        ` 


    })

   

})


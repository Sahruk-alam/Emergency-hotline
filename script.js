let count=0;
// heart section click
function updateHeartCount() {
    count++;
    document.getElementById('heart').innerText = count;
}
document.getElementById('national-heart').addEventListener('click',
     function() {
         updateHeartCount();
     })
document.getElementById('police-heart').addEventListener('click',
     function() {
          updateHeartCount();
     })
     document.getElementById('fire-heart').addEventListener('click',
     function() {
          updateHeartCount();
     })

     document.getElementById('ambulance-heart').addEventListener('click',
     function() {
          updateHeartCount();
     })

     document.getElementById('women-child-heart').addEventListener('click',
     function() {
          updateHeartCount();
     })

     document.getElementById('anti-corruption-heart').addEventListener('click',
     function() {
          updateHeartCount();
     })

     document.getElementById('electricity-heart').addEventListener('click',
     function() {
          updateHeartCount();
     })

     document.getElementById('brac-heart').addEventListener('click',
     function() {
          updateHeartCount();
     })

     document.getElementById('bangladesh-railway-heart').addEventListener('click',
     function() {
          updateHeartCount();
     })
     const storeObject=[];

     // call history function 
     function callHistory(data) {
    const callHistory = document.getElementById('call-history');
        const div= document.createElement('div');
        div.innerHTML=`
        <div class=" mt-5 p-3 rounded-lg flex justify-between items-center bg-[#F2F2F2]">
            <div >
                <h2 class="text-[18px] font-[600]">${data.service}</h2>
                <p class="font-[400]">${data.number}</p>
            </div>
            <p>${data.time}</p>
          </div>
        `;
        callHistory.appendChild(div);
          
     }
     // alert function 
     function alertCoin(value){
          const coinCount = document.getElementById('coin-count').innerText;
        document.getElementById('coin-count').innerText = parseInt(coinCount) - 20;
        if(coinCount > 0){
         alert("📞"+value);
          return;
        }
        if(coinCount <= 0) {

            alert("❌ You don't have enough coins.Need at least 20 coins to make call");
            document.getElementById('coin-count').innerText = 0;
            callHistory().div.innerHTML = '';
            return;
        }
     }
     
     // call button
     // national
     document.getElementById('national-call').addEventListener('click',function(){
          
          const comments=" Calling National Emergency Number 999..."        
          alertCoin(comments);        
        const callData = {
            service: "National Emergency Number",
            number: "999",
            time: new Date().toLocaleTimeString(),
        }
        storeObject.push(callData);
        callHistory(callData);
     }) 
     // police
     document.getElementById('police-call').addEventListener('click',function(){    
          const comments="Calling Police Helpline 999..."
          alertCoin(comments);
               const callData = {
                    service: "Police Helpline Number",
                    number: "999",
                    time: new Date().toLocaleTimeString()
                };
                storeObject.push(callData);
               callHistory(callData);
     })
     // fire
     document.getElementById('fire-call').addEventListener('click',function(){
          const comments="Calling Fire Service Number 999..."
          alertCoin(comments);
               const callData = {
                    service: "Fire Service Number",
                    number: "999",
                    time: new Date().toLocaleTimeString()
                };
                storeObject.push(callData);
               callHistory(callData);
     })
     // ambulance
     document.getElementById('ambulance-call').addEventListener('click',function(){
          const comments="Calling Ambulance Service Number 999..."
          alertCoin(comments);
               const callData = {
                    service: "Ambulance Service Number",
                    number: "1994-999999",
                    time: new Date().toLocaleTimeString()
                };
                storeObject.push(callData);
               callHistory(callData);
     })
     // women and child
     document.getElementById('women-child-call').addEventListener('click',function(){
          const comments="Calling Women and Child Helpline Number 999..."
          alertCoin(comments);
               const callData = {
                    service: "Women and Child Helpline Number",
                    number: "109",
                    time: new Date().toLocaleTimeString()
                };
                storeObject.push(callData);
               callHistory(callData);
     })
     // anti-corruption
     document.getElementById('anti-corruption-call').addEventListener('click',function(){
          const comments="Calling Anti-Corruption Commission Number 999..."
          alertCoin(comments);
               const callData = {
                    service: "Anti-Corruption Commission Number",
                    number: "106",
                    time: new Date().toLocaleTimeString()
                };
                storeObject.push(callData);
               callHistory(callData);
     })
     // electricity
     document.getElementById('electricity-call').addEventListener('click',function(){
          const comments="Calling Electricity Helpline Number 999..."
          alertCoin(comments);
               const callData = {
                    service: "Electricity Helpline Number",
                    number: "16216",
                    time: new Date().toLocaleTimeString()
                };
                storeObject.push(callData);
               callHistory(callData);
     })
     // Brac
     document.getElementById('brac-call').addEventListener('click',function(){
          const comments="Calling Brac Helpline Number 999..."
          alertCoin(comments);
               const callData = {
                    service: "Brac Helpline Number",
                    number: "16445",
                    time: new Date().toLocaleTimeString()
                };
                storeObject.push(callData);
               callHistory(callData);
     })
     // bangladesh railway
     document.getElementById('bangladesh-railway-call').addEventListener('click',function(){
          const comments="Calling Bangladesh Railway Helpline Number 999..."
          alertCoin(comments);
               const callData = {
                    service: "Bangladesh Railway Helpline Number",
                    number: "163",
                    time: new Date().toLocaleTimeString()
                };
                storeObject.push(callData);
               callHistory(callData);
     })

     //  count copy
     // national
document.getElementById('national-copy').addEventListener('click',function(){
   const countCopy = document.getElementById('count-copy');
   countCopy.innerText = parseInt(countCopy.innerText) + 1;
     navigator.clipboard.writeText('999');
     alert('Number copied to clipboard: 999');
   });
   //    police
   document.getElementById('police-copy').addEventListener('click',function(){
      const countCopy = document.getElementById('count-copy');
      countCopy.innerText = parseInt(countCopy.innerText) + 1;
      navigator.clipboard.writeText('999');
      alert('Number copied to clipboard: 999');
   });
   // copy button color change


const copyButtons = document.getElementsByClassName('class-copy');
for (const button of copyButtons) {
    button.addEventListener('click', function() {
        // Remove gray background from the clicked button
        button.classList.remove('bg-[#8A8280]');
        button.classList.add('border-[#d4d6d5]');

        // Add background and text color to #police-copy
        document.getElementById('police-copy')
            .classList.add('bg-[#8A8280]', 'text-white');
    });
}





//  clear button 
document.getElementById('clear-button').addEventListener('click',function(){
   document.getElementById('call-history').innerHTML = '';

})
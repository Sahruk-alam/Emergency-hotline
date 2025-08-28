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
     
     // call button
     document.getElementById('national-call').addEventListener('click',function(){
          alert("Calling National Emergency Number 999...");
         const coinCount = document.getElementById('coin-count').innerText;
        document.getElementById('coin-count').innerText = parseInt(coinCount) - 20;
        
        if(coinCount <= 0) {
            alert("Not enough coins");
            return;
        }
        const callData = {
            service: "National Emergency Number",
            number: "999",
            time: new Date().toLocaleTimeString(),
        }
        storeObject.push(callData);
        callHistory(callData);
     }) 

     document.getElementById('police-call').addEventListener('click',function(){
          alert("Calling Police Helpline 999...");
           const coinCount = document.getElementById('coin-count').innerText;
           document.getElementById('coin-count').innerText = parseInt(coinCount) - 20;
               if(coinCount<= 0) {
                    alert("Not enough coins");
                    return;
               }
               const callData = {
                    service: "Police Helpline Number",
                    number: "999",
                    time: new Date().toLocaleTimeString()
                };
                storeObject.push(callData);
          //    call history setup
               callHistory(callData);
     })
//  clear button 
document.getElementById('clear-button').addEventListener('click',function(){

   document.getElementById('call-history').innerHTML = '';

})
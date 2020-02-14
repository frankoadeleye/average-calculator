document.getElementById('loan-form').addEventListener('submit', function(e){
    // hide results
    document.getElementById('results').style.display = 'none';

    // show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(showNow, 2000);

    e.preventDefault();
});

    function mean(numbers) {
        // mean of [3, 5, 4, 4, 1, 1, 2, 3] is 2.875
        var total = 0,
            i;
        for (i = 0; i < numbers.length; i += 1) {
            total += numbers[i];
        }
        return total / numbers.length;
      }
      function median(numbers) {
        // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
        var median = 0,
            numsLen = numbers.length;
        numbers.sort();
        if (numsLen % 2 === 0) { // is even
            // average of two middle numbers
            median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
        } else { // is odd
            // middle number only
            median = numbers[(numsLen - 1) / 2];
        }
        return median;
      }
      function mode(numbers) {
        // as result can be bimodal or multimodal,
        // the returned result is provided as an array
        // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
        var modes = [],
            count = [],
            i,
            number,
            maxIndex = 0;
        for (i = 0; i < numbers.length; i += 1) {
            number = numbers[i];
            count[number] = (count[number] || 0) + 1;
            if (count[number] > maxIndex) {
                maxIndex = count[number];
            }
        }
        for (i in count) if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
        return modes;
      }
      function range(numbers) {
        // range of [3, 5, 4, 4, 1, 1, 2, 3] is [1, 5]
        numbers.sort();
        return [numbers[0], numbers[numbers.length - 1]];
      }
      
      var trydata = [10, 20, 30, 40, 50, 60, 70, 80];
      
      
    //   document.getElementById('button').addEventListener('click', showNow);
      function showNow(){
          var inputValue = document.getElementById('input-box').value;
          var array = inputValue.split(',');
          var numbers = array.map(Number);
          console.log(mean(trydata));
          console.log(mean(numbers));
          document.getElementById('results').style.display = 'block';
          document.getElementById('mean').innerHTML = mean(numbers);
          document.getElementById('loading').style.display = 'none';
      
      }


// Show Error function

// function showError(error){

//      // hide results when input has incomplete information
//      document.getElementById('results').style.display = 'none';

//      // hide loader when input has incomplete information
//      document.getElementById('loading').style.display = 'none';

//     // create a div
//     const errorDiv = document.createElement('div');

//     // get elements
//     const card = document.querySelector('.card');
//     const heading = document.querySelector('.heading');

//     // Add class
//     errorDiv.className = 'alert alert-danger';

//     // create text node and append to div
//     errorDiv.appendChild(document.createTextNode(error));

//     // insert error above heading
//     card.insertBefore(errorDiv, heading);

//     // Clear error message after 3 seconds
//     setTimeout(clearError, 3000);

    
// }
// function clearError(){
//     document.querySelector('.alert').remove();
// }
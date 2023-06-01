<script>
  $(document).ready(function () {
    // loop through all li elements to count how many are "Yes" and "No"
    var yesCount = 0;
    var noCount = 0;
    $('#child-well-being-assessment-answers li').each(function () {
      var liText = $(this).text().trim(); // Get the text content of the li
      
      // Check if the li text is "Yes" or "No"
      if (liText === 'Yes') {
        yesCount++;
      } else if (liText === 'No') {
        noCount++;
      }
    });

    // calculate the score based on the number of "yes" responses
    var score = yesCount;
    if (yesCount >= 0 && yesCount <= 3) {
      var photo = "https://cdn.glitch.global/90a513c6-68f4-4e9c-89f2-34754814fc0a/score2-3.png?v=1683034943967";
      var message = "Congratulations, your child's overall mental and emotional health appears to be in good shape! While it's always important to keep an eye out for changes in your child's behavior or habits, this score suggests that your child is currently coping well with any challenges they may be facing.";
      var color = "darkgreen";
    } else if (yesCount >= 4 && yesCount <= 6) {
      var photo = "https://cdn.glitch.global/90a513c6-68f4-4e9c-89f2-34754814fc0a/sub.png?v=1683035106678";
      var message = "This score indicates that your child may be experiencing some difficulties with their mental or emotional health. It's important to monitor your child's behavior and habits closely, and consider seeking professional help if you notice any concerning changes. You might also consider talking to your child's school or pediatrician about any concerns you have, and exploring resources in your community to help support your child's well-being.";
      var color = "yellow";
    } else if (yesCount >= 7) {
      var photo = "https://cdn.glitch.global/90a513c6-68f4-4e9c-89f2-34754814fc0a/score10.png?v=1683034954476";
      var message = "This score suggests that your child is facing significant challenges with their mental or emotional health, and it's important to seek professional help as soon as possible. You might consider reaching out to a mental health professional who specializes in working with children, or speaking to your child's pediatrician or school about resources that might be available. Remember that early intervention can be key in helping your child overcome any challenges they may be facing, and supporting their overall well-being.";
      var color = "red";
    }
    
    // update the HTML section with the appropriate score and message breakdown
    var whatsappMessage = encodeURIComponent("Hey, I just took this test: " + message);
    $(".child-well-being-assessment").html(
      "<div class='result-container'><div class='image-container'><img src='" +
      photo +
      "'/></div><div class='assessment-score'><p>Your mental health score is: <div class='score' style='color:" +
      color +
      ";'>" +
      yesCount +
      "</div></p></div><div class='assessment-message'>" +
      message +
      "</div><div class='lets-talk-container'><a href='https://wa.me/?text=" +
      whatsappMessage +
      "' target='_blank'>Let's Talk</a></div></div>"
    );

    // Display the counts in the show-count div
    $('#show-count').text('Yes: ' + yesCount + ', No: ' + noCount);
  });
</script>

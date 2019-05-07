// var checkForCollpase = false
// $('#toggler').click(function () {
//   var startY = $('.navbar').height() / 6;
//   if (!($(window).scrollTop() > startY)) {
//     if (!checkForCollpase) {
//       checkForCollpase = true
//       $('.navbar').addClass("scrolled");
//     } else {
//       checkForCollpase = false
//       $('.navbar').removeClass("scrolled");
//     }
//   } else {
//     checkForCollpase = true
//   }
// })

// function checkScroll() {
//   var startY = $('.navbar').height() / 6; //The point where the navbar changes in px
//   if ($(window).scrollTop() > startY) {
//     $('.navbar').addClass("scrolled");
//   } else {
//     $('.navbar').removeClass("scrolled");
//     $('#navbarSupportedContent').removeClass('show')
//     checkForCollpase = false
//   }
// }

// if ($('.navbar').length > 0) {
//   $(window).on("scroll load resize", function () {
//     checkScroll();
//   });
// }

var holder = 0
        var dataPoint = [
            "<p class=\"side-text\">Our corporate projects focus on the wider area of work-life rhythm. Why rhythm and not balance? Because we understand that as humans we set for ourselves unrealistic goals to reach equilibrium and call them to balance. Happyness peddler seeks to provide spaces where one can introspect, reflect, and learn to manage their mental health between work and life. We focus on:</p>",
            "<p class=\"side-text\">We hope to provide education and tools for students to identify early warning signs of mental illness and subsequently provide programs and an environment that supports recovery and improves resilience for these individuals. Assure that those who request information and need mental health care referral have confidential access to the appropriate information and know how to obtain care. We provide awareness and preventive workshops focusing individually on the following topics:</p>",
            "<p class=\"side-text\">We provide different modules for group therapies for all age groups.  The sessions are curated focusing on movement and arts-based therapy on different topics. In group therapy, you can share your experiences, learn from and support other people and develop skills for managing mental health concerns on your own. In Group therapies we majorly focus on:</p>",
            "<p class=\"side-text\">Wanna have your own intimate support group with like-minded people and learn different experiences? meet us every week. Our main objective of these support groups will be:</p>"
        ]
        var imageSrc = ["src/assets/images/corporate.jpg", "src/assets/images/school.jpg",
            "src/assets/images/group.jpg",
            "src/assets/images/support.jpg"
        ]
        var ulPoint = [
            "<li>Strategies to prevent burnout</li><li>Individual and collective</li><li>Teamwork</li><li>Competitiveness</li><li>Communication</li>",
            "<li>Depression and anxiety</li><li> Avoiding bullying</li><li>Preventing peer pressure and drug abuse</li><li>Building insight and confidence</li>",
            "<li>Insight Building</li><li>Trust Issues</li><li>Body image issues</li><li>Inter and Intra personal communication</li>",
            "<li>Emotional and Practical support</li><li>Regular Participation</li><li>Community building</li><li>Sharing and empowerment</li>",
        ]
        $(document).ready(function () {
           $('#supportGroup').click(function(){
            $('#service_type').val('supportGroup')
           })
           $('#onlineSession').click(function(){
            $('#service_type').val('onlineSession')
           })
           $('#submit_complete_message').hide()
            var helper = function (val) {
                $('#holder' + holder).removeClass('fa fa-angle-right').addClass('fa fa-plus')
                $('#holder' + val).removeClass('fa fa-plus').addClass('fa fa-angle-right')
                $('#image-services').attr('src', imageSrc[val])
                holder = val
                $('#data-point').html(dataPoint[val])
                $('#ul-point').html(ulPoint[val])
            }

            $("#headingOne").click(function () {
                helper(0)
            })
            $("#headingTwo").click(function () {
                helper(1)
            })
            $("#headingThree").click(function () {
                helper(2)
            })
            $("#headingFour").click(function () {
                helper(3)
            })
            $("form").submit(function (event) {
                event.preventDefault()
                var hello = {
                    "name": $('#name').val(),
                    "email": $('#email').val(),
                    "message": $('#message').val()
                }
            
                $('#exampleModal').modal('show')
                $.post("https://happyness-peddler.firebaseio.com/" + $('#service_type').val() + ".json",
                    JSON.stringify(hello),
                    function (data, status) {
                      $('#exampleModal').modal('hide')
                      $('#submit_complete_message').fadeIn();
                      $('.modal-backdrop').remove();
                      $('#myForm').hide()
                    });
            });
        })
 
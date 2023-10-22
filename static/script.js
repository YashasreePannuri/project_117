$(document).ready(function(){

    console.log('Ready')

    //  Fetch the current date and update it in the DOM
    var date = new Date()
    $("#display_date").html(date)


    //  write an event, when Submit button is clicked
    $('').click(function(){

        //  get the text value from the textarea using the 'val()' method
        let text_value = $('').val()

        //  Convert it to JS object.
        input_data={
            "text":$("#text").val()
        }
        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        let input_text = {'text' : text_value}
        console.log(input_text)

        //  ajax request
        $.ajax({

            //  type of web request
            type : 'POST',

            //  Data to be sent in JSON format
            data : JSON.stringify(),

            //  type of response expected is json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  if everything is successful, run this function
            success : function(result){

                // extract prediction and emoticon url from result
                var predicted_emotion = result.data.predicted_emotion  
                var emoji_url = result.data.predicted_emotion_img_url

                //  update the DOM elements
                $("#sentiment").html(predicted_emotion)
                $("#emoji").attr('src' , emoji_url)

                //  show them
                $("#sentiment").css("display" , "block")
                $("#emoji").css("display" , "block")

            },

            //  if any error, run this function
            error : function(result){

                console.log(result)
            }
        })


        //  clearing the textbox after every button push
        $('#text').val("")
    })
        
})
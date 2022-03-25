// $(".trash").click(
//     function () {
//         $(this).parent().remove();
//         var messageCount = $(".card").length;
//         $("#nombre").text(messageCount);
//     }
// )

var messageCount = $(".card").length;
$("#nombre").text(messageCount);

$("#allpage").on("click", ".trash", function () {
    $(this).parent().remove();
})

$("#bouton").click(
    function () {
        var newP = $('#barre').val();
        var newCard = `
        <div class="card">
            <img class="avatar" src="/assets/jimmy.jpg" alt="jimmy">
                <div class="person">
                    <h6 class="name">Jimmy Cabuy</h6>
                    <p>${newP}</p>
                </div>
            <img class="trash" src="/assets/trash.png" alt="trash">
        </div>
`;
        $('#allpage').append(newCard);
        var messageCount = $(".card").length;
        $("#nombre").text(messageCount);
        // $(".trash").click(
        //     function () {
        //         $(this).parent().remove();
        //         var messageCount = $(".card").length;
        //         $("#nombre").text(messageCount);
        //     }
        // )
        $("#barre").val('');
    }
)

// var messageCoount = 0;
// $("#search-bouton").click(
//     function () {
//         $(".name").each(
//             function () {
//                 var newSearch = $('#search-message').val();
//                 if (newSearch != $(this).text()) {
//                     $(this).parent().parent().hide();
//                 } else {
//                     $(this);
//                     newSearch.each(
//                         function () {
//                             messageCoount++;
//                         }
//                     )
//                     console.log(newSearch);
//                     $("#nombre").text(messageCoount);
//                 }
//             }
//         )
//         $("#search-message").val('');
//     }
// )


$("#search-bouton").click(
    function () {
        var newSearch = $('#search-message').val();
        $(".name").each(
            function () {
                if (newSearch != $(this).text()) {
                    $(this).parent().parent().hide();
                } else {
                    $(this);
                }
            }
        );
        var messageCount = $(this).length;
        $("#nombre").text(messageCount);
        $("#search-message").val('');
    }
)
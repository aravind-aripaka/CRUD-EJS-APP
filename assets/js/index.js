$("#add_user").submit(function(event){
    alert("Data inserted successfully");
}) 

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array,function(n,i){
        data[n['name']] = n['value']
    })
    console.log(data);

    var request = {
        "url" : `https://nyxwolf-intern-aravind.herokuapp.com/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response) {
        alert("data updated successfully");
    })
})

if(window.location.pathname=="/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id");
        var request = {
            "url" : `https://nyxwolf-intern-aravind.herokuapp.com/api/users/${id}`,
            "method" : "DELETE",
        }

        if(confirm("Are you sure you want to delete ")){
            $.ajax(request).done(function(response) {
                alert("data removed successfully");
                location.reload();
            })
        }
    })
}
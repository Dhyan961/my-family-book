var images = 
["mom_img.jpg",
 "dad_img.jpg",
 "brother_img.jpg",
 "sister_img.jpg",
 "me_img.jpg"
];

var names = ["Rinku Doshi(My Mom)","Suresh Doshi(My Dad)","Khush Doshi(My Brother)",
"Krishvi Doshi(My Sister)","Dhyan Doshi(Me)"];

var i = 0;

function update(){

    i++;
    var no_of_family_members_in_array = 5;

    if(i > 4){

        i = 0;
    }
    var update_Image = images[i];
    var updated_Name = names[i];
    document.getElementById("family_member_image").src = update_Image;
    document.getElementById("family_member_name").innerHTML = updated_Name;
}
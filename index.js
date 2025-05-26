const tablinks=document.getElementsByClassName('tab-links')
const tabcontents=document.getElementsByClassName('tab-contents')

const opentab=(tabname)=>{
    console.log(tabname)
    for(tablink of tablinks ){
        tablink.classList.remove('active-link')
    }
    for(tabcontent of tabcontents ){
        tabcontent.classList.remove('active-tab')
    }
    // to display activ-link
    event.currentTarget.classList.add('active-link')
    // to display activ-tab
    document.getElementById(tabname).classList.add('active-tab')
}
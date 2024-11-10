import Image from "next/image";

export default function Contact() {
  return (

  <div className="text-center bg-slate-300" >
    
  <h1 className="text-4xl bg-slate-400 text-center">CONTACT</h1>
  <br/>
  <section id="personal-info">
      <h1 className="text-xl flex justify-center"><b>Contact With Me</b></h1><br/>
      <div className="flex justify-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-H9kRQg6-VFD1vsvG1jiNqXLWnKzM6MQEQ&s" height={300} width={300}></img>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx3n8U34k0HTqWdur4rhIiYN9MHV29Re1fVg&s" height={300} width={300}></img>
      <img src="https://www.freepnglogos.com/uploads/email-png/mail-message-email-send-image-pixabay-5.png" height={300} width={300}></img>
</div>
      <p className="text-xl text-blue-950"><b> Name:</b> Afshan Ahmar</p> <br/>       
      <p className="text-xl text-blue-950"><b> Mobile:</b> 1234-5678923</p><br/>
      <p className="text-xl text-blue-950"><b> Address:</b> XYZ Society, City KARACHI</p><br/>
      <p className="text-xl text-blue-950"><b> Home contact:</b> 021-12346789</p><br/>
      <p className="text-xl text-blue-950"><b> Email:</b> <a href="mailto:xyz@gamil.com">xyz@gmail.com</a></p><br/>
<p className="text-xl text-blue-950"><b>linkedin:</b><a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad
  _flagship3_profile_self_edit_contact-info%3B4ih4vrRuTqapt7dhc%2F0%2BUw%3D%3D" >www.linkedin.com</a> </p>
</section>
</div>
  )
}
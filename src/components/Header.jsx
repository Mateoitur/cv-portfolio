const Header = () => {
  return (
    <div class='min-h-screen flex flex-col px-4 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] bg-primary' id='Home'>

      <div class='small-section'>
        <p class='subheading'>COPENHAGEN, DENMARK</p>
        <p class='subheading2'>MATEOITURGAMBLE@GMAIL.COM</p>
      </div>

      <div class='flex-1 flex flex-col items-center justify-center'>
        <h1 class='heading'>MATEO ITUR GAM</h1>
        <img className="avatar 3inline-block rounded-3xl shadow-2xl will-change-transform select-none z-10" src="./headshot.JPG" alt="" />
        <h2 class='heading text-secondary'>LEARNING TO DESIGN, INNOVATE & CREATE</h2>
      </div>

      <div class='small-section'>
        <p class='subheading'>STUDYING ENGINEERING</p>
        <p class='subheading2'>DANISH TECHNICAL UNIVERSITY</p>
      </div>

    </div>
  )
}

export default Header

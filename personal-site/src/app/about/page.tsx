import Image from "next/image";

export default function About() {

    return(
        <div className="flex flex-col justify-center items-center m-2">
        <div className="flex flex-col items-center md:m-10 md:justify-evenly md:flex-row-reverse w:1/2">
        <Image src='/images/my-headshot.webp' alt="headshot of christian garcia" width="350" height="500" />
        <h1 className="md:w-1/2 text-center text-4xl sm:text-5xl p-5 mb-5 rothwood-bold">Christian is a student</h1>
        </div>
        <div className="flex flex-col justify-center mb-20 items-center m-5 sm:m-0 sm:mb-10 gap-10 lg:max-w-screen-lg">
        <p className="rothwood sm:w-10/12">BIOGRAPHY:Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
            venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. </p>
        <p className="rothwood sm:w-10/12">INTERESTS:Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
            venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
        <p className="rothwood sm:w-10/12">EXPERIENCE:Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
            venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
        <p className="rothwood sm:w-10/12">GOALS:Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
            venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
    </div>
        </div>
    )
};

function AboutHeader() {
    return(
        <div>
            <h1>Christian is a "Title"</h1>
            <div>Image</div>
        </div>
    )
};

function AboutText() {
    
    return(
        <div>
        <p>This is where your biography is going to be</p>
        <p>This is where your interests are going to be</p>
        <p>This is where your work experience is going to be</p>
        <p>This is where your desired opportunities and goals are going to be</p>
    </div>
    )
};
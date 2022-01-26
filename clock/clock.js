setInterval(() => {
    d= new Date();
    htime = d.gethours();
    mtime = d.getminutes();
    stime = d.getseconds();
    hrotation =30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;
    
}, 1000);
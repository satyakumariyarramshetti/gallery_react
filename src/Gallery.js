import React,{ useState} from 'react';
import { IoClose } from "react-icons/io5";
import './App.css';
import './gallery.css';

const Gallery = () => {
    const initialData = [
        { id: 1, imgSrc: 'https://w0.peakpx.com/wallpaper/305/217/HD-wallpaper-meditation-calm-pleasant-peace-sun-spiritual-awakening.jpg' },
        { id: 2, imgSrc: 'https://w0.peakpx.com/wallpaper/938/899/HD-wallpaper-orange-trees-beautiful-scenery-mountain-orange-theme-orange-tree-pleasant-scenery-sunlight.jpg' },
        { id: 3, imgSrc: 'https://quotefancy.com/media/wallpaper/3840x2160/17003-Neale-Donald-Walsch-Quote-Life-begins-at-the-end-of-your-comfort.jpg' },
        { id: 4, imgSrc: 'https://cdn.shopify.com/s/files/1/2617/5104/files/famous-quotes.jpg?v=1678442376' },
        { id: 5, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zyJySFiwtoVNZTKFVwL5hBpghbGfuyRH_OE5LsoMUzn2np4vl2otfe8UMsac-rs_1l4&usqp=CAU' },
       // { id: 6, imgSrc: 'https://www.usatoday.com/gcdn/authoring/images/motleyfool/2023/11/05/USAT/71465637007-gettyimages-1304729177.jpeg?crop=1125,1499,x600,y0' },
        { id: 7, imgSrc: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/inspirational-quotes-for-successful-life-design-template-a60917aeaee4d6a2c2b42f5c32a0f4a7_screen.jpg?ts=1713893484' },
        { id: 8, imgSrc: 'https://media.istockphoto.com/id/1392896428/photo/inspirational-quote.jpg?s=612x612&w=0&k=20&c=CbqPLlx65768zd6QQpJqo55MZIAhA_o68cS0nLIfjw0=' },
        { id: 9, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs9xuU6rmp-zrqNpeLxN04OtezqRybt3-zHg&s' },
        { id: 10, imgSrc: 'https://zeromotivational.com/wp-content/uploads/2022/12/motivational-quotes-English-zero-motivational-1-1024x1024.jpg' },
        { id: 11, imgSrc: 'https://i.ytimg.com/vi/CFiCdpnn-jo/hqdefault.jpg?v=63cdf3c9' },
        { id: 12, imgSrc: 'https://cdn.branchcms.com/l4gOa2eDBE-756/images/trails/trail/IMG_7774.1717613032.jpeg' },
        { id: 13, imgSrc: 'https://cdn.britannica.com/92/153992-050-93C02F8F/Boone-Hall-Plantation-Mount-Pleasant-South-Carolina.jpg' },
        { id: 14, imgSrc: 'https://st4.depositphotos.com/2074169/40639/i/450/depositphotos_406396020-stock-photo-nature-panorama-sunset-evening.jpg' },
        { id: 15, imgSrc: 'https://c1.wallpaperflare.com/preview/572/1001/306/copper-creek-pleasant-hill-iowa.jpg' },
       // { id: 16, imgSrc: 'https://www.fluvannacounty.org/sites/default/files/styles/gallery500/public/imageattachments/parksrec/page/2261/monarch.jpg?itok=PLpB7DPH' }
    ];
  


    const [data, setData] = useState(initialData);
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempimgSrc] = useState('');
    const [inputUrl, setInputUrl] = useState('');
    const [fileInput, setFileInput] = useState(null);

 

    const getImg = (imgSrc) => {
        setTempimgSrc(imgSrc);
        setModel(true);
    };

    const handleUrlChange = (e) => {
        setInputUrl(e.target.value);
    };

    const handleFileChange = (e) => {
        setFileInput(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newImageSrc = '';

        if (inputUrl) {
            newImageSrc = inputUrl;
        } else if (fileInput) {
            newImageSrc = URL.createObjectURL(fileInput);
        }

        if (newImageSrc) {
            const newImage = { id: data.length + 1, imgSrc: newImageSrc };
            setData([...data, newImage]);
            setInputUrl('');
            setFileInput(null);
        }
       
    };
   
    

    return (
        <>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
                    If you want to add images:
                    <input
                        type="text"
                        className="input-field"
                        value={inputUrl}
                        onChange={handleUrlChange}
                        placeholder="Enter image URL"
                    />
                    <input
                        type="file"
                        className="input-field"
                        onChange={handleFileChange}
                        accept="image/*"
                    />
                    <button type="submit">Submit</button>
                </form>
                </div>
            <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} alt="Large view" />
                <IoClose className='icon' onClick={() => setModel(false)} />
               
  


            </div>
            <div className='gallery'>
                {data.map((item, index) => (
                  <>
                    <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{ width: '100%' }} alt="Gallery item" />

                    
                    </div>
                  </>
                ))}
            </div>
        </>
    );
};

export default Gallery;

const pupeteer = require("puppeteer"); 

exports.webscrapping = async (req,res)=>{
      console.log(req.body + "thi is url")
      const browser = await pupeteer.launch(); 
      const page = await browser.newPage(); 
      await page.goto(req.body.url) ; 

    //   const html = await page.content();  
      const [el] =  await page.$x('//*[@id="pageContent"]/div[3]/div[2]/div/div[2]')
      console.log(el)
    //   const src = await el.getProperty('src')
      const srcTxt = await el.jsonValue();    
    //   console.log(srcTxt) 
      await browser.close(); 

      res.send({
          status:200, 
          data : el._target, 
      })
}

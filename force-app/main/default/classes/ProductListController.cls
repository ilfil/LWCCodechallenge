public with sharing class ProductListController {

    @AuraEnabled(cacheable=true)
    public static List<ProductResult> getProductsApex(){
        List<ProductResult> listToReturn = new List<ProductResult>();

        for(Integer i=0; i< 12; i++){
            ProductResult pr = new ProductResult();
            pr.Id = String.valueOf(i);
            pr.Name = 'testName' + i;
            pr.Description = 'testDescription' + i;
            pr.imgLink = 'https://lh3.googleusercontent.com/proxy/tW4b2co4kXo3woijQ4iMOAO4p7eqUerhHOW3N0_ReOQDESOaCLpLNZIr2OBI9qTCy1QdWCmfhiHdGBXBDY5HcQ92Zet7QII';
            pr.price = 100*(i+1);
            pr.color = 'black';
            pr.dimensions = '2x2';
            pr.rating = String.valueOf(i);

            listToReturn.add(pr);
        }
        return listToReturn;
    }
    public class ProductResult{
        @AuraEnabled
        public String Id {get;set;}
        @AuraEnabled
        public String Name {get;set;}
        @AuraEnabled
        public String Description {get; set;}
        @AuraEnabled
        public String imgLink {get; set;}
        @AuraEnabled
        public Integer price {get; set;}
        @AuraEnabled
        public String color {get; set;}
        @AuraEnabled
        public String dimensions {get; set;}
        @AuraEnabled
        public String rating {get; set;}

    }
}

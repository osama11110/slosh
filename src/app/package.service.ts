import { Injectable } from "@angular/core";
import { Package } from "./package.model";
import { Router } from '@angular/router';

@Injectable()

export class PackageService
{
     cartPackage: Package[] = [];
  //     private packageItem: any = [{
  //     commonTests:[{
  //     packageId: 1,
  //     packageName: 'Glucose(plasma) Test',
  //     packagePrice: 500,
  //     packageDesc:'A fasting plasma glucose test or fasting glucose test (FGT), is a test that can be used to help diagnose diabetes or pre-diabetes.'
  //   },
  //   {
  //     packageId: 2,
  //     packageName: 'Complete blood Picture',
  //     packagePrice: 600,
  //     packageDesc:'CBP is a blood test used to evaluate your overall health and detect a wide range of disorders.'
  //   }
  // ],
  //     allergens:[{
  //     packageId: 1,
  //     packageName: 'Glucose(plasma) Test',
  //     packagePrice: 500,
  //     packageDesc:'A fasting plasma glucose test or fasting glucose test (FGT), is a test that can be used to help diagnose diabetes or pre-diabetes.'
  //   },
  //   {
  //     packageId: 2,
  //     packageName: 'Complete blood Picture',
  //     packagePrice: 600,
  //     packageDesc:'CBP is a blood test used to evaluate your overall health and detect a wide range of disorders.'
  //   }
  // ]
  // }];

// CommonTests----------------------------------------------------------------------

  private commonItem: Package[]= [{
  packageId: 1,
  packageName: 'Glucose(plasma) Test',
  packagePrice: 500,
  packageDesc:'A fasting plasma glucose test or fasting glucose test (FGT), is a test that can be used to help diagnose diabetes or pre-diabetes.'
},
{
  packageId: 2,
  packageName: 'Complete blood Picture',
  packagePrice: 500,
  packageDesc:'CBP is a blood test used to evaluate your overall health and detect a wide range of disorders.'
},
{
  packageId: 3,
  packageName: 'Urea and Electrolytes Test',
  packagePrice: 500,
  packageDesc:'They provide essential information on renal function, principally in excretion and homoeostasis.'
},
{
  packageId: 4,
  packageName: 'Lipids Test',
  packagePrice: 500,
  packageDesc:'A lipid panel is a blood test that measures lipids—fats and fatty substances used as a source of energy by your body.'
},
{
  packageId: 5,
  packageName: 'Lipids+HDL Test',
  packagePrice: 500,
  packageDesc:'An HDL cholesterol test measures the amount of cholesterol found inside high-density lipoproteins (HDL) in a sample of your blood.'
},
{
  packageId: 6,
  packageName: 'HbA1c',
  packagePrice: 500,
  packageDesc:'The hemoglobin A1c test also known as HbA1c tells you your average level of blood sugar over the past 2 to 3 months.'
},
{
  packageId: 7,
  packageName: 'Full blood count',
  packagePrice: 500,
  packageDesc:'A complete blood count (CBC) is a blood test used to evaluate your overall health and detect a wide range of disorders.'
},
{
  packageId: 8,
  packageName: 'Vitamin D Test',
  packagePrice: 500,
  packageDesc:'A vitamin D blood test measures the level of 25(OH)D in your blood.Abnormal levels can indicate bone disorders.'
},
{
  packageId: 9,
  packageName: 'Hepatitis A Serology',
  packagePrice: 500,
  packageDesc:'Hepatitis A serology involves qualitative detection of IgG antibodies and IgM antibodies to human Hepatitis A virus.'
},
{
  packageId: 10,
  packageName: 'Hepatitis B Serology',
  packagePrice: 500,
  packageDesc:'Hepatitis B serologic testing involves measurement of several hepatitis B virus (HBV)-specific antigens and antibodies.'
},
{
  packageId: 11,
  packageName: 'Hepatitis B SA',
  packagePrice: 500,
  packageDesc:'Hepatitis B Surface Antibodies looks for antibodies that your ImmuneSystem makes in response of surface protein of the hepatitis B virus.'
},
{
  packageId: 12,
  packageName: 'Hepatitis C Serology',
  packagePrice: 500,
  packageDesc:'The diagnostic blood tests for hepatitis C virus (HCV), detect antibodies to HCV, and the molecular assays which detect or quantify HCV RNA.'
},
{
  packageId: 13,
  packageName: 'Thyroid Function Test',
  packagePrice: 500,
  packageDesc:'Test used to tell if your thyroid gland is functioning properly by measuring the amount of thyroid hormones in your blood.'
},
{
  packageId: 14,
  packageName: 'HIV Serology',
  packagePrice: 500,
  packageDesc:'Serological testing identifies HIV antigen and/or antibody generated as part of the immune response to infection with HIV.'
},
{
  packageId: 15,
  packageName: 'Liver Function Test',
  packagePrice: 500,
  packageDesc:'Liver function tests, also referred to as a hepatic panel, are groups of blood tests that provide information about the state of a patients liver.'
},
{
  packageId: 16,
  packageName: 'Iron/Fe Test',
  packagePrice: 500,
  packageDesc:'A ferritin blood test measures the level of ferritin in your blood. Ferritin is a protein that stores iron inside your cells.'
},
{
  packageId: 17,
  packageName: 'Cholesterol Test',
  packagePrice: 500,
  packageDesc:'Colesterol test is a blood test that measures the amount of each type of cholesterol and certain  types of fats in your blood.'
},
];

// Allergens-----------------------------------------------------

private allergenItem: Package[]= [{
packageId: 1,
packageName: 'House Dust Mite',
packagePrice: 500,
packageDesc:'In this test, tiny amounts of purified allergen extracts including an extract for dust mites are pricked onto your skins surface.'
},
{
packageId: 2,
packageName: 'Cat Epithelium Test',
packagePrice: 500,
packageDesc:'Phadia’s E1 test is used to detect blood levels of the IgE (antibodies) responsible for allergic reactions (sneezing, runny nose etc).'
},
{
packageId: 3,
packageName: 'Dog Dander Test',
packagePrice: 500,
packageDesc:'This test measures the amount of allergen-specific Ige antibodies in the blood in order to detect an allergy to dog dander or hair.'
},
{
packageId: 3,
packageName: 'Timothy Grass Test',
packagePrice: 500,
packageDesc:'This test measures the amount of allergen-specific IgE antibodies in the blood to detect an allergy to timothy grass or hay.'
},
{
packageId: 4,
packageName: 'Aspergillus Fumigatus Test',
packagePrice: 500,
packageDesc:'This test measures the amount of allergen-specific IgE antibodies in the blood to aspergillus fumigatus.'
},
{
packageId: 5,
packageName: 'Tree Pollen Test (Mixed Allergen)',
packagePrice: 500,
packageDesc:'In this test a small drop of the possible allergen on your skin to see the reaction to that allergen.'
},
{
packageId: 6,
packageName: 'Mold Screen Test (Mixed Allergen)',
packagePrice: 500,
packageDesc:'The mold allergy panel test is done to detect allergies caused by common indoor and outdoor molds.'
},
{
packageId: 7,
packageName: 'Food Screen Test (Mixed Allergen)',
packagePrice: 500,
packageDesc:'In this test, a small amount of the suspected food is placed on the skin of your forearm or back.'
},
{
packageId: 8,
packageName: 'Nut Screen Test (Mixed Allergen)',
packagePrice: 500,
packageDesc:'This blood test checks if you are allergic to 14 different nuts or seeds, including peanuts and walnuts.'
},
{
packageId: 9,
packageName: 'Codfish Test',
packagePrice: 500,
packageDesc:'The codfish allergy blood test checks for an allergic reaction to codfish by assessing the level of the IgE antibodies in the blood.'
},
{
packageId: 10,
packageName: 'Egg White Test',
packagePrice: 500,
packageDesc:'The egg white allergy blood test measures the amount of allergen-specific antibodies in the blood in order to detect an allergy to egg whites.'
},
{
packageId: 11,
packageName: 'Milk Test',
packagePrice: 500,
packageDesc:'In this test, a liquid containing milk or a milk protein extract is placed on your forearm or back, then make a small scratch on the skin.'
},
{
packageId: 12,
packageName: 'Wheat Test',
packagePrice: 500,
packageDesc:'In this test,  a small amount of purified wheat protein under the surface of your skin, usually on your forearm or upper back will be injected.'
},
{
packageId: 13,
packageName: 'Soybean Test',
packagePrice: 500,
packageDesc:'In this test, small amount of your skin is pricked and your skin is exposed to small amounts of the proteins found in soy.'
},
{
packageId: 14,
packageName: 'Egg Yolk Test',
packagePrice: 500,
packageDesc:'In this test, small amount of your skin is pricked and your skin is exposed to small amounts of a liquid containing egg protein.'
},
{
packageId: 15,
packageName: 'Honey Bee Venom Test',
packagePrice: 500,
packageDesc:'During this test, a small amount of allergen extract (bee venom) is injected into the skin of your arm or upper back, to see the reaction.'
},
{
packageId: 16,
packageName: 'Wasp Venom Test',
packagePrice: 500,
packageDesc:'During this test, a small amount of allergen extract (Wasp venom) is injected into the skin of your arm or upper back, to see the reaction.'
},
{
packageId: 18,
packageName: 'Latex Test',
packagePrice: 500,
packageDesc:'In this test a sample containing the specific antigen or antibody is collected, which is later mixed with an antibody, or antigen.'
},
];


// Chemical-Pathology-------------------------------------------------------------------

private chemicalItem: Package[]= [{
packageId: 1,
packageName: 'Urea and Electrolytes Test',
packagePrice: 500,
packageDesc:'They provide essential information on renal function, principally in excretion and homoeostasis.'
},
{
packageId: 2,
packageName: 'Liver Function Test',
packagePrice: 500,
packageDesc:'Liver function tests, also referred to as a hepatic panel, are groups of blood tests that provide information about the state of a patients liver.'
},
{
packageId: 3,
packageName: 'Lipids Test',
packagePrice: 500,
packageDesc:'A lipid panel is a blood test that measures lipids—fats and fatty substances used as a source of energy by your body.'
},
{
packageId: 4,
packageName: 'Lipid+HDL Test',
packagePrice: 500,
packageDesc:'An HDL cholesterol test measures the amount of cholesterol found inside high-density lipoproteins (HDL) in a sample of your blood.'
},
{
packageId: 5,
packageName: 'Glucose(plasma) Test',
packagePrice: 500,
packageDesc:'A fasting plasma glucose test or fasting glucose test (FGT), is a test that can be used to help diagnose diabetes or pre-diabetes.'
},
{
packageId: 6,
packageName: 'HbA1c',
packagePrice: 500,
packageDesc:'The hemoglobin A1c test also known as HbA1c tells you your average level of blood sugar over the past 2 to 3 months.'
},
{
packageId: 7,
packageName: 'Thyroid Function Test',
packagePrice: 500,
packageDesc:'Test used to tell if your thyroid gland is functioning properly by measuring the amount of thyroid hormones in your blood.'
},
{
packageId: 8,
packageName: 'Iron/Fe Test',
packagePrice: 500,
packageDesc:'A ferritin blood test measures the level of ferritin in your blood. Ferritin is a protein that stores iron inside your cells.'
},
{
packageId: 9,
packageName: 'Bone Profile Test',
packagePrice: 500,
packageDesc:'A bone profile of blood tests helps to determine how well your bodys metabolic processes are affecting your skeleton.'
},
{
packageId: 10,
packageName: 'Albumin (Random Urine)',
packagePrice: 500,
packageDesc:'This test determines if there is an abnormal amount of the protein albumin in a urine sample.'
},
{
packageId: 11,
packageName: 'Proteins/Creatinine ratio(random)',
packagePrice: 500,
packageDesc:'A protein and creatinine urine test, random measures the protein/creatinine ratio random untimed.'
},
{
packageId: 12,
packageName: 'Protein/Creat(24 Hour Urine) ',
packagePrice: 500,
packageDesc:'A Protein Total Urine Test, 24-Hour with Creatinine is used to monitor kidney function, and to detect kidney damage.'
},





];


    public count = 0;
    private cartItem: Package[] = [];

    constructor(private router: Router){}

// Geting the data in the cards
    getcommonItems()
    {
      return this.commonItem;
    }
    getallergenItems()
    {
      return this.allergenItem;
    }
    getchemicalItems()
    {
      return this.chemicalItem;
    }




    getcartItems()
    {
      return this.cartItem;
    }
    setItems(item: Package[])
    {
      this.cartItem = item;
    }
    clearCart() {
    this.cartItem = [];
    this.count=0;

  }
  addToCart(item: Package)
  {
      this.cartItem.push(item);
      this.count = this.count+1;
      return this.count;
  }
  checkOut()
  {
    this.setItems(this.cartPackage);
  }
}

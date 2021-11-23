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
{
packageId: 13,
packageName: 'Protein/Creat(24 Hour Urine) ',
packagePrice: 500,
packageDesc:'A Protein Total Urine Test, 24-Hour with Creatinine is used to monitor kidney function, and to detect kidney damage.'
},
{
packageId: 14,
packageName: 'Prostrate Specific Antigen ',
packagePrice: 500,
packageDesc:'This test is used to measure blood PSA levels and help detect prostate cancer or other prostate abnormalities.'
},
{
packageId: 15,
packageName: 'Gamma GT ',
packagePrice: 500,
packageDesc:'This test measures the amount of the enzyme GGT in your blood, may also used to determine the cause of elevated AP.'
},
{
packageId: 16,
packageName: 'Gamma GT ',
packagePrice: 500,
packageDesc:'This test measures the amount of the enzyme GGT in your blood, may also used to determine the cause of elevated AP.'
},
{
packageId: 17,
packageName: 'Vitamin B12 ',
packagePrice: 500,
packageDesc:'This test measures the amount of vitamin B12 in the blood, body needs this B vitamin to make blood cells and maintain nervous system.'
},
{
packageId: 18,
packageName: 'Folate Test ',
packagePrice: 500,
packageDesc:'A folate test measures the amount of folic acid in the blood. Folic acid is vitamin B-9, which is essential for normal growth.'
},
{
packageId: 19,
packageName: 'GTT',
packagePrice: 500,
packageDesc:'The glucose tolerance test is a test in which glucose is given and blood samples taken to determine how quickly it is cleared from the blood.'
},
{
packageId: 20,
packageName: 'Creatine kinase',
packagePrice: 500,
packageDesc:'This test measures the amount of creatine kinase in the blood. High levels can indicate damage or disease of the skeletal muscles.'
}
];


// Haematology-------------------------------------------------------------------

private haematologyItem: Package[]= [
{
packageId: 1,
packageName: 'Full blood count',
packagePrice: 500,
packageDesc:'A complete blood count (CBC) is a blood test used to evaluate your overall health and detect a wide range of disorders.'
},
{
packageId: 2,
packageName: 'Reticulocytes',
packagePrice: 500,
packageDesc:'A reticulocyte count is used to determine the number of reticulocytes in the blood to help evaluate conditions that affect RBCs.'
},
{
packageId: 3,
packageName: 'INR',
packagePrice: 500,
packageDesc:'The International Normalized Ratio test measures the time for the blood to clot. It is also known as prothrombin time or PT.'
},
{
packageId: 4,
packageName: 'D-dimers',
packagePrice: 500,
packageDesc:'A D-dimer test looks for D-dimer in blood. D-dimer is a protein fragment (small piece) thats made when a blood clot dissolves in your body.'
},
{
packageId: 5,
packageName: 'Glandular Fever Test',
packagePrice: 500,
packageDesc:'Glandular fever is diagnosed with a simple blood test called a mono spot test, which tests for antibodies to the Epstein-Barr virus.'
},
];


// Microbiology-------------------------------------------------------------------

private microbiologyItem: Package[]= [
{
packageId: 1,
packageName: 'Rheumatoid Factor Test',
packagePrice: 500,
packageDesc:'Measures the amount of rheumatoid factor in your blood, proteins produced by your immune system.'
},
{
packageId: 2,
packageName: 'Liver Antibody Screen',
packagePrice: 500,
packageDesc:'Measures the amount of rheumatoid factor in your blood, proteins produced by your immune system.'
},
{
packageId: 3,
packageName: 'Coeliac Disease Screen',
packagePrice: 500,
packageDesc:'Celiac disease blood tests measure the amount of particular antibodies in the blood. The most common tests include tTG.'
},
{
packageId: 4,
packageName: 'Thyroid Peroxidase Antibody Test',
packagePrice: 500,
packageDesc:'Thyroid peroxidase test is a test that measures the level of an antibody that is directed against thyroid peroxidase.'
},
{
packageId: 5,
packageName: 'ANA',
packagePrice: 500,
packageDesc:'The purpose of an antinuclear antibody test is to detect, measure, and evaluate antinuclear antibodies in a patients blood sample.'
},
];

// Microbiology-------------------------------------------------------------------

private cardiologyItem: Package[]= [
{
packageId: 1,
packageName: '12 lead ECG -16+',
packagePrice: 500,
packageDesc:'The ECG to assess your heart rhythm, diagnose poor blood flow to the heart muscle (ischemia), diagnose a heart attack, and diagnose abnormalities of your heart, such as heart chamber enlargement and abnormal electrical conduction.'
}
];

// Sexual Health-------------------------------------------------------------------

private sexualItem: Package[]= [
{
packageId: 1,
packageName: 'STI Blood Test+',
packagePrice: 500,
packageDesc:' The STI screening test is a blood or saliva test for human immunodeficiency virus (HIV), the virus that causes AIDS. STI testing can be quick and easy.'
},
{
packageId: 2,
packageName: 'HIV Serology Test',
packagePrice: 500,
packageDesc:' Serological testing identifies HIV antigen and/or antibody generated as part of the immune response to infection with HIV.'
},
{
packageId: 3,
packageName: 'Syphilis Serology Test',
packagePrice: 500,
packageDesc:'A syphilis test is usually in the form of a blood test. During this test, a professional will take a blood sample from a vein in your arm.'
},
{
packageId: 4,
packageName: 'Chlamydia and GC Detection Test (urine)',
packagePrice: 500,
packageDesc:'Urine specimens are used to reliably screen both male and female patients for symptomatic or AUI.'
},
{
packageId: 5,
packageName: 'High Vaginal Swab',
packagePrice: 500,
packageDesc:'HVS is a technique used to obtain a sample of discharge from the vagina. This is then sent for culture and sensitivity.'
},
{
packageId: 6,
packageName: 'Endocervical Swab Test',
packagePrice: 500,
packageDesc:'An endocervical gram stain checks for abnormal bacteria in or around the cervixAn endocervical gram stain can detect STIs.'
},
{
packageId: 7,
packageName: 'Chlamydia and GC Detection Test (swab)',
packagePrice: 500,
packageDesc:'The soft tip end of the swab is inserted into your vagina about 2 inches to get the samples.'
},
];

// Virology-------------------------------------------------------------------

private virologyItem: Package[]= [
{
packageId: 1,
packageName: 'Rubella Immunity',
packagePrice: 500,
packageDesc:'The rubella test is used to detect antibodies in the blood that develop in response to a rubella infection or immunization.'
},
{
packageId: 2,
packageName: 'Mumps Serology',
packagePrice: 500,
packageDesc:'A buccal or oral swab specimen for detection of virus should be collected as soon as possible upon suspicion of mumps disease.'
},
{
packageId: 3,
packageName: 'Hepatitis B SA',
packagePrice: 500,
packageDesc:'Hepatitis B Surface Antibodies looks for antibodies that your ImmuneSystem makes in response of surface protein of the hepatitis B virus.'
},
{
packageId: 4,
packageName: 'HIV Serology',
packagePrice: 500,
packageDesc:'Serological testing identifies HIV antigen and/or antibody generated as part of the immune response to infection with HIV.'
},
{
packageId: 5,
packageName: 'Hepatitis C Serology',
packagePrice: 500,
packageDesc:'The diagnostic blood tests for hepatitis C virus (HCV), detect antibodies to HCV, and the molecular assays which detect or quantify HCV RNA.'
},
{
packageId: 6,
packageName: 'Hepatitis A Serology',
packagePrice: 500,
packageDesc:'Hepatitis A serology involves qualitative detection of IgG antibodies and IgM antibodies to human Hepatitis A virus.'
},
{
packageId: 7,
packageName: 'Hepatitis A Serology',
packagePrice: 500,
packageDesc:'Hepatitis A serology involves qualitative detection of IgG antibodies and IgM antibodies to human Hepatitis A virus.'
},
{
packageId: 8,
packageName: 'Varicella Zoster Immunity',
packagePrice: 500,
packageDesc:'This test detects either antibodies produced by the immune system in response to a VZV infection.'
},
{
packageId: 9,
packageName: 'Syphilis Serology Test',
packagePrice: 500,
packageDesc:'A syphilis test is usually in the form of a blood test. During this test, a professional will take a blood sample from a vein in your arm.'
},
{
packageId: 10,
packageName: 'Toxoplasma Serology',
packagePrice: 500,
packageDesc:'A toxoplasmosis test is a blood test that checks for antibodies to the Toxoplasma gondii parasite. Its also called a toxoplasma test.'
},
{
packageId: 11,
packageName: 'ASOT Test',
packagePrice: 500,
packageDesc:'It is a blood test to measure antibodies against streptolysin O, a substance produced by group A streptococcus bacteria.'
},
{
packageId: 12,
packageName: 'CMV Serology test',
packagePrice: 500,
packageDesc:'The CMV blood test determines the presence of proteins called antibodies to a virus called cytomegalovirus (CMV) in the blood.'
},
{
packageId: 13,
packageName: 'Parvovirus Serology',
packagePrice: 500,
packageDesc:'Parvovirus serology (anti–parvovirus B19 IgM and IgG antibodies) can be determined using ELISA or radioimmunoassay.'
},
{
packageId: 14,
packageName: 'Hepatitis A Immunity',
packagePrice: 500,
packageDesc:'This test looks for antibodies in your blood called IgM. The test can find out if you are infected with the hepatitis A virus (HAV).'
},
{
packageId: 15,
packageName: 'Atypical Pneumonia Test',
packagePrice: 500,
packageDesc:'This test looks for antibodies in your blood called IgM. The test can find out if you are infected with the HAV.'
},
{
packageId: 16,
packageName: 'General Virus Serology Test',
packagePrice: 500,
packageDesc:'Viral serology activities involve virus detection, quantifying viral antigens, and the presence of virus.'
},
{
packageId: 17,
packageName: 'Viral Detection (Swab)',
packagePrice: 500,
packageDesc:'A viral skin swab is a sterile object, lightly rubbed against a visible skin lesion or vesicle which tells you if you have a current infection.'
},
{
packageId: 18,
packageName: 'Hepatitis E Serology',
packagePrice: 500,
packageDesc:'Hepatitis E test detects specific anti-HEV immunoglobulin M (IgM) antibodies to the virus in a persons blood.'
},
{
packageId: 19,
packageName: 'Hepatitis B Core Antibody',
packagePrice: 500,
packageDesc:'This test looks for antibodies called IgM in your blood,to find out whether you are actively infected.'
},
{
packageId: 20,
packageName: 'Bloodborne Virus Screen (HIV, HBV and HCV)',
packagePrice: 500,
packageDesc:'This test is an antibody test detecting the bodys immune reaction to the virus.'
},
{
packageId: 21,
packageName: 'Chlamydia and GC Detection Test (swab)',
packagePrice: 500,
packageDesc:'The soft tip end of the swab is inserted into your vagina about 2 inches to get the samples.'
},
];

// Immuno Tests-------------------------------------------------------------------

private immunoItem: Package[]= [
{
packageId: 1,
packageName: 'Immunoglobulins & Electrophoresis Test',
packagePrice: 500,
packageDesc:'It is a blood test used to measure the types of Ig present in your blood, especially IgM, IgG, and IgA.'
},
{
packageId: 2,
packageName: 'C3 and C4 Test',
packagePrice: 500,
packageDesc:'C3 & C4 Blood Test measures the levels of Complement component 3 and Complement component 4 in the blood.'
},
{
packageId: 3,
packageName: 'CCP Antibodies Test',
packagePrice: 500,
packageDesc:'This test looks for CCP (cyclic citrullinated peptide) antibodies in the blood. CCP antibodies are made by the immune system.'
},
{
packageId: 4,
packageName: 'Rheumatoid Factor Test',
packagePrice: 500,
packageDesc:'This test measures the amount of rheumatoid factor in blood, proteins produced by your immune System.'
},
{
packageId: 4,
packageName: 'ANA (Includes Centromere Antibody)',
packagePrice: 500,
packageDesc:'This test helps to diagnose the autoimmune disorder limited cutaneous scleroderma.'
},
{
packageId: 5,
packageName: 'Liver Antibody Screen Test',
packagePrice: 500,
packageDesc:'This test identifies some of the important antibodies responsible for autoimmune liver disease.'
},
{
packageId: 6,
packageName: 'Celiac Disease Screen Test',
packagePrice: 500,
packageDesc:'Celiac disease antibody tests help diagnose and monitor the disease and a few other gluten-sensitive conditions.'
},
{
packageId: 6,
packageName: 'ANCA (Immunofluorescence)',
packagePrice: 500,
packageDesc:'An ANCA test is most often used to find out if you have a type of autoimmune vasculitis.'
},
{
packageId: 7,
packageName: 'ANCA (Immunofluorescence)',
packagePrice: 500,
packageDesc:'An ANCA test is most often used to find out if you have a type of autoimmune vasculitis.'
},
{
packageId: 8,
packageName: 'Thyroid Peroxidase Test',
packagePrice: 500,
packageDesc:'Thyroid peroxidase test is a test that measures the level of an antibody that is directed against thyroid peroxidase.'
},
{
packageId: 9,
packageName: 'Intrinsic Factor Antibody Test',
packagePrice: 500,
packageDesc:'This is a blood test for pernicious anemia, which is caused by a deficiency of vitamin B-12.'
},
{
packageId: 9,
packageName: 'Cardiolipin Antibodies Test',
packagePrice: 500,
packageDesc:'A cardiolipin antibodies test looks for a certain kind of antibody in your blood, which fights off infection.'
},
{
packageId: 10,
packageName: 'Serum Free Light chains Test',
packagePrice: 500,
packageDesc:'This test helps detect, diagnose, and monitor plasma cell disorders (dyscrasias).'
},
{
packageId: 11,
packageName: 'HLA B27 Screening Test',
packagePrice: 500,
packageDesc:'This test looks for a protein that is found on the surface of white blood cells called human leukocyte antigen B27.'
},
{
packageId: 11,
packageName: 'HLA B27 Screening Test',
packagePrice: 500,
packageDesc:'This test looks for a protein that is found on the surface of white blood cells called human leukocyte antigen B27.'
},
{
packageId: 12,
packageName: 'Asthma, Rhinitis Panel Test',
packagePrice: 500,
packageDesc:'This test is used to detect the presence of IgE antibodies in the blood against the rhinitis allergy.'
},
{
packageId: 13,
packageName: 'Food Panel Test',
packagePrice: 500,
packageDesc:'This test measures the amount of allergen-specific IgE antibodies in the blood in order to detect an allergy to various common foods.'
},
{
packageId: 13,
packageName: 'Dairy Allergy Test',
packagePrice: 500,
packageDesc:'In this test a small drop of liquid containing the dairy allergen is placed under your skin on your forearm or back to see how skin reacts.'
},
{
packageId: 14,
packageName: 'Latex Allergy Test',
packagePrice: 500,
packageDesc:'In this test a sample containing the specific antigen or antibody is collected, which is later mixed with an antibody, or antigen.'
},
{
packageId: 15,
packageName: 'Latex Allergy Test',
packagePrice: 500,
packageDesc:'In this test a sample containing the specific antigen or antibody is collected, which is later mixed with an antibody, or antigen.'
},
{
packageId: 16,
packageName: 'Nut Allergy Test',
packagePrice: 500,
packageDesc:'In this test a sample containing the specific antigen or antibody is collected, which is later mixed with an antibody, or antigen.'
},
{
packageId: 17,
packageName: 'Insect Venom Allergy Test',
packagePrice: 500,
packageDesc:'In this test a small amount of a liquid containing insect venom is placed on the back or forearm.'
},
];

// Other Chemical tests-------------------------------------------------------------------

private otherItem: Package[]= [
{
packageId: 1,
packageName: 'Aspartate Transaminase Test',
packagePrice: 500,
packageDesc:'The aspartate aminotransferase (AST) test is a blood test that checks for liver damage.'
},
{
packageId: 2,
packageName: 'Bicarbonate Test',
packagePrice: 500,
packageDesc:'This test measures the amount of bicarbonate, a form of carbon dioxide, in your blood.This test uses only the fluid in your blood.'
},
{
packageId: 3,
packageName: 'Chloride Test',
packagePrice: 500,
packageDesc:'A chloride blood test measures the amount of chloride in your blood. Chloride is a type of electrolyte.'
},
{
packageId: 4,
packageName: 'Cortisol Test',
packagePrice: 500,
packageDesc:'A cortisol test is a blood test that measures the amount of cortisol, a steroid hormone produced by the adrenal cortex.'
},
{
packageId: 5,
packageName: 'Free T3 Test',
packagePrice: 500,
packageDesc:'The free T3 test measures the T3 that is floating free in the blood or circulating unbound in your blood. Most of the T3 in your body binds to protein.'
},
{
packageId: 6,
packageName: 'Lactate Dehydrogenase',
packagePrice: 500,
packageDesc:'This blood test measures the level of LDH in your body. LDH is an enzyme, or catalyst, found in many different tissues.'
},
{
packageId: 7,
packageName: 'Total Protein Test',
packagePrice: 500,
packageDesc:'The total protein test measures the total amount of two classes of proteins found in the fluid portion of your blood.'
},
{
packageId: 8,
packageName: 'Paracetamol Test',
packagePrice: 500,
packageDesc:'This plasma test is used to establish a diagnosis of paracetamol over dosage and to help decide on the need for treatment.'
},
{
packageId: 9,
packageName: 'Androstenedione  test',
packagePrice: 500,
packageDesc:'This test evaluate the function of the adrenal gland and the ovaries or the testicles as well as the production of hormones.'
},
{
packageId: 10,
packageName: 'DHEA (Sulphate) test',
packagePrice: 500,
packageDesc:'This test measures the levels of DHEA (Dehydroepiandrosterone) sulfate (DHEAS) in your blood stream.'
},
{
packageId: 11,
packageName: 'Sex Hormone Binding Globulin Test',
packagePrice: 500,
packageDesc:'This test measures the level of sex hormone binding globulin (SHBG) in your blood. SHBG is a protein made by your liver.'
},
{
packageId: 12,
packageName: 'ACTH Test',
packagePrice: 500,
packageDesc:'An ACTH test measures the levels of both ACTH and cortisol in the blood. To diagnose disorders of the pituitary or adrenal glands.'
},
{
packageId: 13,
packageName: 'Alkaline Phosphate Isoenzyme Test',
packagePrice: 500,
packageDesc:'This blood test measures the amounts of different types of alkaline phosphatase in the blood.'
},
{
packageId: 14,
packageName: 'Vitamin B6 (Whole Blood) Test',
packagePrice: 500,
packageDesc:'In this Test a blood sample from a vein in your arm is taken to detect vitamin B6 levels in blood.'
},
{
packageId: 15,
packageName: 'Ca125 Antigen Test',
packagePrice: 500,
packageDesc:'A CA 125 test measures the amount of the protein CA 125 (cancer antigen 125) in your blood, proteins made by ovarian cancer.'
},
{
packageId: 16,
packageName: 'Carcinoembryonic Antigen Test',
packagePrice: 500,
packageDesc:'A CEA (carcinoembryonic antigen) test measures the level of CEA in your blood or other body fluids.'
},
{
packageId: 17,
packageName: 'ACE Test',
packagePrice: 500,
packageDesc:'The ACE test measures the level of angiotensin-converting enzyme (ACE) in the blood helps to diagnose and monitor sarcoidosis.'
},
{
packageId: 18,
packageName: 'Alpha-1 Antitrypsin Profile Test',
packagePrice: 500,
packageDesc:'This test measures the amount of alpha-1 antitrypsin (AAT) in the blood, deficiency causes COPD.'
},
{
packageId: 19,
packageName: 'Beta Carotene Blood Test',
packagePrice: 500,
packageDesc:'The beta-carotene test measures the level of beta-carotene in the blood for deficiencies.'
},
{
packageId: 20,
packageName: 'Bile Acids Test (Serum)',
packagePrice: 500,
packageDesc:'The bile acid test is a test to determine bile acid levels in the body which helps to determine if the liver is working properly.'
},
{
packageId: 21,
packageName: 'Copper Test',
packagePrice: 500,
packageDesc:'This test measures the total amount of copper in your blood or urine, which can cause a number diseases for example Wilsons disease.'
},
{
packageId: 22,
packageName: 'Ceruloplasmin Test',
packagePrice: 500,
packageDesc:'This test measures the amount of ceruloplasmin in your blood. Ceruloplasmin is a protein that is made in the liver.'
},
{
packageId: 23,
packageName: 'Salicylate Test',
packagePrice: 500,
packageDesc:'This is a blood test to measure the concentration of the Salicylate in the blood, intoxication is usually caused by an overdose of aspirin.'
},
{
packageId: 24,
packageName: 'Trace Elements Test',
packagePrice: 500,
packageDesc:'A trace elements test detects unusual levels of different minerals that are found in the body.Testing uses either a blood or urine sample.'
},
{
packageId: 25,
packageName: 'Magnesium Test',
packagePrice: 500,
packageDesc:'This test measures the amount of the mineral magnesium in your blood. Magnesium is found in your cells and bones.'
},
{
packageId: 25,
packageName: 'Vitamin D Test',
packagePrice: 500,
packageDesc:'A vitamin D blood test measures the level of 25(OH)D in your blood.Abnormal levels can indicate bone disorders.'
},
{
packageId: 25,
packageName: 'Vitamin D Test',
packagePrice: 500,
packageDesc:'A vitamin D blood test measures the level of 25(OH)D in your blood.Abnormal levels can indicate bone disorders.'
},
{
packageId: 26,
packageName: 'Vitamin E Test',
packagePrice: 500,
packageDesc:'A vitamin E test measures the amount of vitamin E in your blood. Vitamin E also known as tocopherol or alpha-tocopherol.'
},
{
packageId: 26,
packageName: 'PTH Test',
packagePrice: 500,
packageDesc:'This test measures the level of parathyroid hormone (PTH) in the blood. PTH, also known as parathormone is made by your parathyroid glands.'
},
{
packageId: 27,
packageName: 'CA 19.9 Aantigen Test',
packagePrice: 500,
packageDesc:'This test measures the amount of a protein called CA 19-9 in the blood. High levels of CA 19-9 can be a sign of pancreatic cancer.'
},
{
packageId: 28,
packageName: 'CA 15.3 Aantigen Test',
packagePrice: 500,
packageDesc:'This test measures the amount of a protein called CA 15-3 in the blood. High levels of CA 19-9 can be a sign of Breast cancer.'
},
{
packageId: 29,
packageName: 'CA 15.3 Aantigen Test',
packagePrice: 500,
packageDesc:'This test measures the amount of a protein called CA 15-3 in the blood. High levels of CA 19-9 can be a sign of Breast cancer.'
},
{
packageId: 30,
packageName: 'Tumour Markers Test',
packagePrice: 500,
packageDesc:' These tests look for tumor markers, sometimes called cancer markers, in the blood, urine, or body tissues of the patient.'
},
{
packageId: 31,
packageName: 'Lead (Whole Body) Test',
packagePrice: 500,
packageDesc:'This test measures the lead levels in your body. A high level of lead in the body indicates lead poisoning.'
},
{
packageId: 32,
packageName: 'Mercury Test',
packagePrice: 500,
packageDesc:'Mercury testing  detects the presence of an excessive amount of mercury in a persons blood and/or urine sample.'
},
{
packageId: 33,
packageName: 'Methotrexate Test',
packagePrice: 500,
packageDesc:'This checks the liver enzymes alanine transaminase and aspartate transaminase and levels of serum albumin when you start MTX.'
},
{
packageId: 34,
packageName: 'Carboxyhemoglobin Test',
packagePrice: 500,
packageDesc:'This test is used to diagnose carbon monoxide poisoning. It is also used to detect changes in hemoglobin.'
},
{
packageId: 35,
packageName: 'Cholinesterase Test (Pesticides)',
packagePrice: 500,
packageDesc:'This test can be used to detect and diagnose organophosphate pesticide exposure and/or poisoning.'
},
{
packageId: 36,
packageName: 'Total and Conjugated Bilirubin Test',
packagePrice: 500,
packageDesc:'This test measures the direct and indirect bilirubin levels in the blood. This can also tell if you have any liver disease.'
},
{
packageId: 37,
packageName: 'Haptoglobin Test',
packagePrice: 500,
packageDesc:'Haptoglobin testing is used to help detect and evaluate hemolytic anemia and to distinguish it from anemia due to other causes.'
},
{
packageId: 38,
packageName: 'Amiodarone Test',
packagePrice: 500,
packageDesc:'The amiodarone test measures the amount of amiodarone in blood.Amiodarone is a type of heart medication.'
},
{
packageId: 39,
packageName: 'Ethanol Test (Blood)',
packagePrice: 500,
packageDesc:'The ethanol Test measures the levels of ethanol or ethyl-alcohol in blood which can detect the evidence of alcohol use.'
},
{
packageId: 40,
packageName: 'Methanol Test',
packagePrice: 500,
packageDesc:'This test is used to measure levels of methanol in the body to see if you have a toxic level of methanol in your body.'
}
];

// Routine Chemical tests-------------------------------------------------------------------

private routineItem: Package[]= [
{
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
packageName: 'Bone Profile Test',
packagePrice: 500,
packageDesc:'A bone profile of blood tests helps to determine how well your bodys metabolic processes are affecting your skeleton.'
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
packageName: 'Glucose(plasma) Test',
packagePrice: 500,
packageDesc:'A fasting plasma glucose test or fasting glucose test (FGT), is a test that can be used to help diagnose diabetes or pre-diabetes.'
},
{
packageId: 7,
packageName: 'HbA1c',
packagePrice: 500,
packageDesc:'The hemoglobin A1c test also known as HbA1c tells you your average level of blood sugar over the past 2 to 3 months.'
},
{
packageId: 8,
packageName: 'Albumin (Random Urine)',
packagePrice: 500,
packageDesc:'This test determines if there is an abnormal amount of the protein albumin in a urine sample.'
},
{
packageId: 9,
packageName: 'Thyroid Function Test',
packagePrice: 500,
packageDesc:'Test used to tell if your thyroid gland is functioning properly by measuring the amount of thyroid hormones in your blood.'
},
{
packageId: 9,
packageName: 'Prostate Specific Antigen Test',
packagePrice: 500,
packageDesc:'This test is used to measure blood PSA levels and help detect prostate cancer or other prostate abnormalities.'
},
{
packageId: 10,
packageName: 'Vitamin B12 Test',
packagePrice: 500,
packageDesc:'This test measures the amount of vitamin B12 in the blood, body needs this B vitamin to make blood cells and maintain nervous system.'
},
{
packageId: 11,
packageName: 'Folate Test',
packagePrice: 500,
packageDesc:'A folate test measures the amount of folic acid in the blood. Folic acid is vitamin B-9, which is essential for normal growth.'
},
{
packageId: 12,
packageName: 'Iron/Fe Test',
packagePrice: 500,
packageDesc:'A ferritin blood test measures the level of ferritin in your blood. Ferritin is a protein that stores iron inside your cells.'
},
{
packageId: 13,
packageName: 'Amylaze Test',
packagePrice: 500,
packageDesc:'This test measures the amount of amylase in a persons blood. Abnormal levels of amylase may indicate problem with the pancreas.'
},
{
packageId: 14,
packageName: 'Gamma GT',
packagePrice: 500,
packageDesc:'This test measures the amount of the enzyme GGT in your blood, may also used to determine the cause of elevated AP.'
},
{
packageId: 15,
packageName: 'Creatine kinase',
packagePrice: 500,
packageDesc:'This test measures the amount of creatine kinase in the blood. High levels can indicate damage or disease of the skeletal muscles.'
},
{
packageId: 16,
packageName: 'Creatine kinase',
packagePrice: 500,
packageDesc:'This test measures the amount of creatine kinase in the blood. High levels can indicate damage or disease of the skeletal muscles.'
},
{
packageId: 17,
packageName: 'Magnesium Test',
packagePrice: 500,
packageDesc:'Magnesium blood test is used to check the level of magnesium in your blood. Levels that are too low are known as hypomagnesemia.'
},
{
packageId: 18,
packageName: 'Urine/Uric Acid Test',
packagePrice: 500,
packageDesc:'Urine/Uric acid test measures the levels of uric acid you have in your blood. Samples are taken in the form of urine or blood.'
},
{
packageId: 19,
packageName: 'Cholesterol Test',
packagePrice: 500,
packageDesc:'Colesterol test is a blood test that measures the amount of each type of cholesterol and certain  types of fats in your blood.'
},
{
packageId: 20,
packageName: 'NT - pro BNP Test',
packagePrice: 500,
packageDesc:'The NT-proBNP blood test measures brain natriuretic peptide to detect heart failure, NT-proBNP are protiens made by the heart.'
},
{
packageId: 21,
packageName: 'Adjusted Calcium (Serum)',
packagePrice: 500,
packageDesc:'This test measures the calcium value adjusted for the albumin concentration in the blood.'
},
{
packageId: 22,
packageName: 'Adjusted Calcium (Serum)',
packagePrice: 500,
packageDesc:'This test measures the calcium value adjusted for the albumin concentration in the blood.'
},
{
packageId: 23,
packageName: 'GTT',
packagePrice: 500,
packageDesc:'The glucose tolerance test is a test in which glucose is given and blood samples taken to determine how quickly it is cleared from the blood.'
},
{
packageId: 24,
packageName: 'HCG Test',
packagePrice: 500,
packageDesc:'The human chorionic gonadotropin (hCG) blood test measures the level of hCG hormone present in a sample of your blood.'
},
{
packageId: 25,
packageName: 'LH+FSH Test',
packagePrice: 500,
packageDesc:'FSH works closely with another hormone LH to control sexual functions.This test indicates damage of the testes or ovaries.'
},
{
packageId: 26,
packageName: 'Oestradiol Test',
packagePrice: 500,
packageDesc:'This test measures the amount of estradiol (E2), used to evaluate and diagnose the cause of precocious puberty in girls.'
},
{
packageId: 27,
packageName: 'Progesterone Test',
packagePrice: 500,
packageDesc:'A progesterone test measures the level of progesterone in your blood. Progesterone is a female hormone made by the ovaries.'
},
{
packageId: 28,
packageName: 'Prolactin Test',
packagePrice: 500,
packageDesc:'This test (PRL) measures how much of a hormone called prolactin you have in your blood. The hormone is made in your pituitary gland.'
},
{
packageId: 29,
packageName: 'Testosterone Test',
packagePrice: 500,
packageDesc:' In males, the testosterone test can help find the reason for sexual problems, like reduced sex drive or erectile dysfunction.'
},
{
packageId: 30,
packageName: 'Free Androgen Index Test',
packagePrice: 500,
packageDesc:'The Free Androgen Index (FAI) test gives an estimate of how much free testosterone is present in the blood.'
},
{
packageId: 31,
packageName: 'Carbamazepine Test',
packagePrice: 500,
packageDesc:'This test measures the amount of the medicine carbamazepine in your blood.It is a medicine used to treat epilepsy.'
},
{
packageId: 32,
packageName: 'Digoxin Test',
packagePrice: 500,
packageDesc:'A digoxin test checks how much digoxin you have in your blood. Digoxin is a type of medicine called a cardiac glycoside.'
},
{
packageId: 33,
packageName: 'Lipoprotein Test',
packagePrice: 500,
packageDesc:'A lipoprotein (a) test is used to check for risk of stroke, heart attack, or other heart diseases.Lipoproteins are made of protein and fat.'
},
{
packageId: 34,
packageName: 'Lithium Test',
packagePrice: 500,
packageDesc:'This test measures and monitors the amount of lithium in your blood. It is a medicine used to treat psychiatric illnesses.'
},
{
packageId: 35,
packageName: 'Phenobarbital Test',
packagePrice: 500,
packageDesc:'This test measures the amount of the phenobarbital in your blood. Phenobarbital is used to treat epilepsy in children and adults.'
},
{
packageId: 36,
packageName: 'Phenytoin Test',
packagePrice: 500,
packageDesc:'This test monitors the level of the seizure medicine phenytoin (Dilantin) in your blood.It is an anticonvulsant medicine to control seizures.'
},
{
packageId: 37,
packageName: 'Theophyllin Test',
packagePrice: 500,
packageDesc:'This test measures the level of theophylline in your blood. It is a chemical similar to caffeine, used as a medicine to treat lung conditions.'
},
{
packageId: 38,
packageName: 'CSF Test',
packagePrice: 500,
packageDesc:'This is a test to look at the fluid that surrounds the brain and spinal cord. CSF acts as a cushion, protecting the brain and spine from injury.'
},
{
packageId: 39,
packageName: 'Faecal Calprotectin Test',
packagePrice: 500,
packageDesc:'Faecal calprotectin testing helps clinicians distinguish between inflammatory bowel issues and non-inflammatory bowel issues.'
},
{
packageId: 40,
packageName: 'Osmolality Test',
packagePrice: 500,
packageDesc:'This test measures the amount of dissolved substances such as sodium, potassium etc in blood, urine or stool.'
},
];

// Urine tests-------------------------------------------------------------------

private urineItem: Package[]= [
{
packageId: 1,
packageName: 'Osmolality Test',
packagePrice: 500,
packageDesc:'This test measures the amount of dissolved substances such as sodium, potassium etc in blood, urine or stool.'
},
{
packageId: 2,
packageName: 'Calcium Test',
packagePrice: 500,
packageDesc:'A calcium blood test measures the amount of calcium in your blood. Optimal calcium levels are required for healthy bones.'
},
{
packageId: 3,
packageName: 'Creatinine Test',
packagePrice: 500,
packageDesc:'A creatinine urine test measures the amount of creatinine in your urine. This helps to determine your kidney health.'
},
{
packageId: 4,
packageName: 'Creatinine Clearence Test',
packagePrice: 500,
packageDesc:'Creatinine clearance test measures the amount of creatinine in a sample of pee collected over 24 hours.'
},
{
packageId: 5,
packageName: 'Magnesium Test (24 Hours)',
packagePrice: 500,
packageDesc:'Magnesium 24 hours test is used to check the level of magnesium in your pee collected over 24 hours.'
},
{
packageId: 6,
packageName: 'Oxalate Test (24 Hours)',
packagePrice: 500,
packageDesc:'That Oxalate Urine Test looks for the presence of certain toxic substances in the intestinal tract from pee collected over 24 hours.'
},
{
packageId: 7,
packageName: 'Phosphate Test (24 Hours)',
packagePrice: 500,
packageDesc:'The phosphate urine test measures the amount of phosphate in a sample of urine collected over 24 hours.'
},
{
packageId: 8,
packageName: 'Albumin (Random Urine)',
packagePrice: 500,
packageDesc:'This test determines if there is an abnormal amount of the protein albumin in a urine sample.'
},
{
packageId: 9,
packageName: 'Albumin (24 Hour)',
packagePrice: 500,
packageDesc:'This test determines if there is an abnormal amount of the protein albumin in a urine sample collected over 24 hours.'
},
{
packageId: 10,
packageName: 'Protein (24 Hour)',
packagePrice: 500,
packageDesc:'This test determines if there is an abnormal amount of the protein in a urine sample collected over 24 hours.'
},
{
packageId: 11,
packageName: 'Proteins/Creatinine ratio(random)',
packagePrice: 500,
packageDesc:' A protein and creatinine urine test, random measures the protein/creatinine ratio random untimed.'
},
{
packageId: 12,
packageName: 'Protein/Creat (24 Hour )',
packagePrice: 500,
packageDesc:'A Protein Total Urine Test, 24-Hour with Creatinine is used to monitor kidney function, and to detect kidney damage.'
},
{
packageId: 12,
packageName: 'Cortisol (24 Hour) ',
packagePrice: 500,
packageDesc:'This test measures the level of cortisol in the urine collected for over 24 hours. The cortisol level may show problems with the adrenal glands.'
},
{
packageId: 13,
packageName: 'Lead (24 Hour Urine) Test ',
packagePrice: 500,
packageDesc:'This test measures the lead levels in your urine collected for over 24 hours,excessive levels leads to lead poisoning.'
},
{
packageId: 14,
packageName: 'Mercury (24 Hour)',
packagePrice: 500,
packageDesc:'This test detects the presence of an excessive amount of mercury in a persons urine that is collected for over 24 hours.'
},
{
packageId: 15,
packageName: 'Porphyrins Random test',
packagePrice: 500,
packageDesc:'Porphyrin tests measure the level of porphyrins in urine. Porphyrins are chemicals that help make hemoglobin.'
},
{
packageId: 16,
packageName: 'Urate/Uric Acid Test (24 Hour)',
packagePrice: 500,
packageDesc:'Urate/Uric acid test measures the levels of uric acid you have in your urine collected for over 24 hours.'
},
{
packageId: 17,
packageName: 'Urate/Uric Acid Test (Random Urine)',
packagePrice: 500,
packageDesc:'Urate/Uric acid test measures the levels of uric acid you have in your urine smaples obtained.'
},
{
packageId: 18,
packageName: 'Urea and Electrolytes Test',
packagePrice: 500,
packageDesc:'They provide essential information on renal function, principally in excretion and homoeostasis.'
},
{
packageId: 19,
packageName: 'Copper Test (24 hours)',
packagePrice: 500,
packageDesc:'Copper Test 24 hours measures the total amount of copper in a urine sample collected for over 24 hours to find copper toxicity.'
},
{
packageId: 20,
packageName: 'Copper Test (Random Urine)',
packagePrice: 500,
packageDesc:'Copper Test random measures the total amount of copper in a urine sample to find copper toxicity.'
},
{
packageId: 21,
packageName: 'Catecholamine Test (24 Hours)',
packagePrice: 500,
packageDesc:'Catecholamine 24 hours test measures the total amount of catecholamines released into the urine in 24 hours.'
},
{
packageId: 22,
packageName: 'VMA Profile and Catecholamines Test',
packagePrice: 500,
packageDesc:'This test measures the Vanillylmandelic acid and other catecholamine metabolites like HVA in urine.'
},
];

// Haemo tests-------------------------------------------------------------------

private haemoItem: Package[]= [
{
packageId: 1,
packageName: 'Full blood count',
packagePrice: 500,
packageDesc:'A complete blood count (CBC) is a blood test used to evaluate your overall health and detect a wide range of disorders.'
},
{
packageId: 2,
packageName: 'INR',
packagePrice: 500,
packageDesc:'The International Normalized Ratio test measures the time for the blood to clot. It is also known as prothrombin time or PT.'
},
{
packageId: 3,
packageName: 'Coagulation Screen Test',
packagePrice: 500,
packageDesc:'Coagulation tests measure your bloods ability to clot, proteins that are essential for blood clot formation.'
},
{
packageId: 4,
packageName: 'Plasma Screen Test',
packagePrice: 500,
packageDesc:'Plasma protein tests are blood tests that detect the amount of proteins in the blood. These tests are also known as a total protein test.'
},
{
packageId: 5,
packageName: 'Plasma Viscosity Test',
packagePrice: 500,
packageDesc:'Plasma viscosity test can be used as an indirect measure of the amount of protein present in the plasma (liquid) part of the blood.'
},
{
packageId: 6,
packageName: 'D-dimers',
packagePrice: 500,
packageDesc:'A D-dimer test looks for D-dimer in blood. D-dimer is a protein fragment (small piece) thats made when a blood clot dissolves in your body.'
},
{
packageId: 7,
packageName: 'MP Screen',
packagePrice: 500,
packageDesc:'The Malarial Parasite test helps to detect malaria antigens in the blood and to determine drug susceptibility of the parasite.'
},
{
packageId: 8,
packageName: 'Glandular Fever Test',
packagePrice: 500,
packageDesc:'This can be diagnosed with a simple blood test called a mono spot test. This will test for the Epstein-Barr virus, which causes glandular fever.'
},
{
packageId: 9,
packageName: 'Haemoglobinopathy Screen',
packagePrice: 500,
packageDesc:'This is a group of tests that determines the presence and relative amounts of abnormal forms of hemoglobin.'
},
{
packageId: 10,
packageName: 'G6PD Screen',
packagePrice: 500,
packageDesc:'The G6PD test is a blood test that measures how much of this enzyme glucose-6-phosphate dehydrogenase you have in your blood.'
},
];

// Bacteriology tests-------------------------------------------------------------------

private bactItem: Package[]= [
{
packageId: 1,
packageName: 'Wound Swab Test',
packagePrice: 500,
packageDesc:'This test checks for bacteria or other organisms in a wound with the help of sterile swab. The test is used to find out if a wound is infected.'
},
{
packageId: 2,
packageName: 'High Vaginal Swab',
packagePrice: 500,
packageDesc:'HVS is a technique used to obtain a sample of discharge from the vagina. This is then sent for culture and sensitivity.'
},
{
packageId: 3,
packageName: 'Endocervical Swab Test',
packagePrice: 500,
packageDesc:'An endocervical gram stain checks for abnormal bacteria in or around the cervixAn endocervical gram stain can detect STIs.'
},
{
packageId: 4,
packageName: 'Eye Swab Test',
packagePrice: 500,
packageDesc:'This test checks for superficial bacterial eye infections or presence of organisms causing ophthalmia neonatorum in neonates.'
},
{
packageId: 5,
packageName: 'Mouth Swab Test',
packagePrice: 500,
packageDesc:'A mouth swab drug test is a screening test used to detect substance use. Its also referred to as a saliva drug test or oral fluids drug.'
},
{
packageId: 6,
packageName: 'Nose Swab Test',
packagePrice: 500,
packageDesc:'This is a test that checks for viruses and bacteria in the secretions from the back of your nose that cause respiratory infections.'
},
{
packageId: 7,
packageName: 'Skin Swab Test',
packagePrice: 500,
packageDesc:'This tests for germs that affect your skin, fingernails, or toenails.A sample of skin is added to a substance that promotes germ growth.'
},
{
packageId: 8,
packageName: 'Genital Swab Test',
packagePrice: 500,
packageDesc:'A sterile swab is used to take the samples from the genitals of the patient to check for any infection, bacteria or any disease.'
},
{
packageId: 9,
packageName: 'Throat Swab Test',
packagePrice: 500,
packageDesc:'This is a test that checks for viruses and bacteria in the secretions from the back of your mouth that cause respiratory infections.'
},
{
packageId: 10,
packageName: 'Ear Swab Test',
packagePrice: 500,
packageDesc:'This is a test that checks for germs in the fluid sample obtained from the patients ear that can cause different infections.'
},
{
packageId: 11,
packageName: 'Urine for Microscopy and Culture Test',
packagePrice: 500,
packageDesc:'This test detects bacteria in your urine. This test can find and identify the germs that cause a urinary tract infection.'
},
{
packageId: 12,
packageName: 'Sputum for Tb Test',
packagePrice: 500,
packageDesc:'This test find germs such as TB bacteria that can cause an infection. A sample of sputum is added to a substance that promotes bacteria growth.'
},
{
packageId: 13,
packageName: 'Urine for Tb Test',
packagePrice: 500,
packageDesc:'Urine for TB test finds active tuberculosis (TB) infection from the urine sample. Advanced UTTB may cause loss of kidney function.'
},
{
packageId: 14,
packageName: 'Nail Clippings Test',
packagePrice: 500,
packageDesc:'In this test a clipping of 2-3 mm long from all ten fingernails are collected which are further examined to check for the infection.'
},
{
packageId: 15,
packageName: 'Nail Scraping Test',
packagePrice: 500,
packageDesc:'In Nail scraping test sample of debris are collected that are evaluated under a microscope for the dignosis of certain nail infections.'
},
{
packageId: 16,
packageName: 'Nail Scraping Test',
packagePrice: 500,
packageDesc:'In Nail scraping test sample of debris are collected that are evaluated under a microscope for the dignosis of certain nail infections.'
},
{
packageId: 17,
packageName: 'Skin Scraping Test',
packagePrice: 500,
packageDesc:'In Skin scraping test sample of skin cells are collected that are evaluated under a microscope for the dignosis of certain skin infections.'
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
    gethaematologyItems()
    {
      return this.haematologyItem;
    }
    getmicrobiologyItems()
    {
      return this.microbiologyItem;
    }
    getcardiologyItems()
    {
      return this.cardiologyItem;
    }
    getsexualItems()
    {
      return this.sexualItem;
    }
    getvirologyItems()
    {
      return this.virologyItem;
    }
    getimmunoItems()
    {
      return this.immunoItem;
    }
    getotherItems()
    {
      return this.otherItem;
    }
    getroutineItems()
    {
      return this.routineItem;
    }
    geturineItems()
    {
      return this.urineItem;
    }
    gethaemoItems()
    {
      return this.haemoItem;
    }
    getbactItems()
    {
      return this.bactItem;
    }


// Cart Items--------------------------------

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

export const sweeteners = [
    {
    id: 1,
    name: 'Acesulfame K',
    type: 'Artificial Sweeteners',
    overview: {
      generalInfo: 'Acesulfame Potassium, known as Acesulfame K or Ace K, is a calorie-free sweetener used globally. It is chemically stable, making it suitable for use in various food and drink products, including baking and cooking.',
      history: 'Discovered in 1967 by German chemist Karl Clauss at Hoechst AG, Acesulfame K was approved for use in foods and beverages by the FDA in 1988. It has since been recognized and approved by numerous health authorities worldwide for its safety and effectiveness as a sugar substitute.',
      notablePoints: 'Acesulfame K is known for its excellent stability under heat, making it a preferred choice for products subjected to high temperatures during processing. It is often blended with other sweeteners to create a taste profile more similar to sugar, without contributing to calories or affecting blood sugar levels.'
    },
    sweetnessRelativeToSugar: {
      value: 200,
      text: 'Acesulfame K is about 200 times sweeter than sugar, meaning a little goes a long way in achieving the desired sweetness without the calories.'
    },
    generalSafety: 'Approved by various global health and safety organizations for general use in food and beverages, deemed safe within established acceptable daily intake (ADI) guidelines.',
    safeDosage: {
      amount: 15,
      text: 'The ADI for Acesulfame K is set at 15 mg/kg of body weight per day. For an average adult, this means they can safely consume a significant amount without health risks.'
    },
    practicalSafeDosageExample: {
      amountPer70kgAdult: 1050,
      equivalentInDietSoda: 26,
      text: 'For a person weighing 70kg, the safe daily intake of Acesulfame K translates to roughly 26 cans of diet soda. This example illustrates the safety margin and the unlikelihood of reaching the ADI with normal consumption.'
    },
    benefitsComparedToSugar: {
      list: [
        'Does not contribute to tooth decay.',
        'Aids in managing calorie intake for weight management.',
        'Does not impact blood sugar levels, making it suitable for individuals with diabetes.'
      ],
      text: 'Compared to sugar, Acesulfame K offers significant benefits such as no risk of tooth decay, support for weight management by providing a sweet taste without calories, and suitability for those managing diabetes due to its non-impact on blood sugar levels.'
    },
    primaryUses: 'Utilized in diet sodas, sugar-free gum, desserts, and as a sweetener in coffee and tea.',
    approvalByGoverningBodies: {
      details: [
        { country: 'EU', name: 'European Food Safety Authority (EFSA)', link: 'https://www.efsa.europa.eu/' },
        { country: 'UK', name: 'Food Standards Agency', link: 'https://www.food.gov.uk/' },
        { country: 'Canada', name: 'Health Canada', link: 'https://www.canada.ca/en/health-canada.html' },
        { country: 'Australia', name: 'Food Standards Australia New Zealand (FSANZ)', link: 'https://www.foodstandards.gov.au/' },
        { country: 'New Zealand', name: 'Food Safety - New Zealand Ministry for Primary Industries', link: 'https://www.mpi.govt.nz/food-safety/' },
        { country: 'USA', name: 'U.S. Food and Drug Administration (FDA)', link: 'https://www.fda.gov/' }
      ],
      text: 'Acesulfame K is approved and considered safe by major health organizations around the world, including the EFSA in Europe, the FDA in the USA, and equivalent bodies in the UK, Canada, Australia, and New Zealand.'
    },
    mythsVsFacts: {
      myth: 'Often falsely linked to serious health issues like cancer and cognitive problems.',
      fact: 'Extensive studies and reviews have affirmed its safety when consumed within the ADI, with no credible evidence linking it to health issues. Debunking these myths is essential for informed dietary choices.'
    },
    sugarComparisons: {
      context: 'Comparing diet sodas with Acesulfame K to regular sugar-containing sodas provides a clear illustration of the benefits in terms of calorie and sugar reduction.',
      healthImplications: {
        text: 'Choosing a diet soda over a regular one eliminates the intake of about 35g of sugar per can, helping to manage weight and reduce the risk of diabetes and tooth decay.'
      },
      broaderPerspective: 'While choosing diet options like Acesulfame K can support specific health goals, its also crucial to maintain a balanced diet and consider overall lifestyle for optimum health.'
    },
    studiesAndReferences: [
      {
        title: 'FDA on Acesulfame Potassium',
        link: 'https://www.fda.gov/food/food-additives-petitions/high-intensity-sweeteners',
        text: 'The FDA’s overview of Acesulfame K, highlighting its safety based on extensive research.'
      },
      {
        title: 'EFSA on Acesulfame K',
        link: 'https://www.efsa.europa.eu/en/efsajournal/pub/2089',
        text: 'The European Food Safety Authority’s scientific opinion on Acesulfame K, affirming its safety for consumption.'
      },
      {
        title: 'Comprehensive Review on Acesulfame K Metabolism Effects',
        link: 'https://www.sciencedirect.com/science/article/abs/pii/S0278691504002710',
        text: 'A detailed scientific review examining the metabolism and safety of Acesulfame K.'
      }
    ],
    breakdownUponDigestion: {
      text: 'Acesulfame K is unique among many sweeteners because it is not metabolized by the human body and is excreted unchanged. This means it does not break down into other compounds during digestion.',
    },
    amountsInCommonItems: [
      {
        item: 'Diet Soda (e.g., Diet Coke)',
        amount: 'Approximately 40-60 mg per can (355 ml)',
        text: 'Diet sodas typically contain between 40 to 60 mg of Acesulfame K per can, providing a sweet taste without the calories associated with sugar.'
      },
      {
        item: 'Sugar-Free Gum',
        amount: 'Approximately 2-5 mg per piece',
        text: 'A single piece of sugar-free gum can contain between 2 to 5 mg of Acesulfame K, contributing to the sweet flavor without sugar.'
      },
      {
        item: 'Light or Sugar-Free Yogurts',
        amount: 'Approximately 20-40 mg per serving (about 150g)',
        text: 'Light or sugar-free yogurts use Acesulfame K to maintain sweetness, with each serving containing about 20 to 40 mg.'
      }
    ],
    comparisonWithNaturalFoods: {
      introText: 'Since Acesulfame K is excreted unchanged and does not break down into other components, a direct comparison of breakdown products with natural foods isnt applicable. However, considering other sweeteners like Aspartame, which breaks down into phenylalanine, aspartic acid, and methanol, we can draw comparisons based on methanol content as an example.',
      methanolInNaturalFoods: [
        {
          food: 'Fruits and Vegetables (e.g., Tomatoes, Citrus fruits)',
          amount: 'Varies, but can be up to 10-100 mg per kg of food',
          text: 'Natural foods, particularly fruits and vegetables, can contain methanol as a byproduct of pectin. The amount varies but is generally considered to be much higher than what one would be exposed to through sweeteners in diet products.'
        },
        {
          food: 'Fruit Juices',
          amount: 'Up to 200 mg per liter',
          text: 'Fruit juices, especially those made from citrus fruits, can contain up to 200 mg of methanol per liter due to the natural breakdown of pectin found in the fruit.'
        }
      ],
      explanatoryText: 'The methanol content found in natural foods and beverages due to the breakdown of pectin significantly exceeds the trace amounts one might ingest from sweeteners in diet products. This context is important when considering the safety and health implications of consuming products sweetened with artificial sweeteners like Acesulfame K.'
    }
  },
  {
    id: 2,
    name: "Aspartame",
    type: "Artificial Sweeteners",
    overview: {
      generalInfo: "Aspartame is a low-calorie artificial sweetener, about 200 times sweeter than sugar. Commonly found in diet beverages, sugar-free gum, and low-calorie desserts, aspartame allows for sweet taste without the calories of sugar.",
      history: "Discovered in 1965 and approved by the FDA in 1981, aspartame is one of the most studied food additives in the world and has been deemed safe for consumption by over 100 countries and major regulatory agencies.",
      notablePoints: "Aspartame is composed of two amino acids, phenylalanine and aspartic acid, which are naturally occurring in foods that contain protein. It's metabolized by the body just like any other protein."
    },
    sweetnessRelativeToSugar: {
      value: 200,
      text: "Aspartame's high sweetness allows for much smaller quantities to be used in food products, providing a significant reduction in caloric intake when substituting sugar."
    },
    generalSafety: {
      text: "Extensive scientific research and reviews by regulatory bodies worldwide, including the FDA, EFSA, and WHO, have consistently confirmed aspartame's safety for the general population, including pregnant women and children, within the established acceptable daily intake (ADI)."
    },
    safeDosage: {
      amount: "40 mg/kg of body weight per day",
      text: "The ADI for aspartame, established by the FDA and EFSA, is considered safe for daily consumption without posing health risks to consumers."
    },
    practicalSafeDosageExample: {
      text: "An adult weighing 70 kg can safely consume up to 2,800 mg of aspartame per day, equivalent to about 14 cans of a diet soda, far beyond typical consumption patterns."
    },
    benefitsComparedToSugar: {
      list: [
        "Helps in weight management by reducing calorie intake.",
        "Does not contribute to dental caries.",
        "Suitable for individuals with diabetes as it does not raise blood sugar levels."
      ],
      text: "Aspartame offers significant benefits over sugar, contributing to weight management, dental health, and glycemic control."
    },
    primaryUses: "Used in a variety of products, including diet sodas, sugar-free gums, desserts, and tabletop sweeteners, aspartame is a versatile sweetener catering to the demand for low-calorie alternatives to sugar.",
    approvalByGoverningBodies: {
      details: [
        { country: "EU", name: "European Food Safety Authority (EFSA)", link: "https://www.efsa.europa.eu/" },
        { country: "UK", name: "Food Standards Agency", link: "https://www.food.gov.uk/" },
        { country: "Canada", name: "Health Canada", link: "https://www.canada.ca/en/health-canada.html" },
        { country: "Australia", name: "Food Standards Australia New Zealand (FSANZ)", link: "https://www.foodstandards.gov.au/" },
        { country: "USA", name: "U.S. Food and Drug Administration (FDA)", link: "https://www.fda.gov/" }
      ],
      text: "Aspartame's approval by global health organizations is based on comprehensive safety evaluations, supporting its use within the recommended guidelines."
    },
    mythsVsFacts: {
      myth: "Linked to numerous health issues, including cancer.",
      fact: "Decades of research and exhaustive reviews have found no reliable evidence that aspartame at dietary levels is linked to cancer or any other serious health conditions."
    },
    sugarComparisons: {
      context: "Opting for aspartame-sweetened products over those containing sugar can significantly lower calorie intake and help manage health issues such as obesity and diabetes.",
      healthImplications: {
        text: "By reducing sugar intake, consumers can benefit from aspartame's role in a health-conscious diet, supporting overall well-being and disease prevention."
      },
      broaderPerspective: "Balancing aspartame use within a diverse and nutritious diet is key to maximizing health benefits while enjoying the sweetness it offers."
    },
    studiesAndReferences: [
      {
        title: "FDA Review of Aspartame",
        link: "https://www.fda.gov/food/food-additives-petitions/aspartame-information",
        text: "The FDA’s comprehensive review underscores aspartame's safety, backed by extensive scientific evidence."
      },
      {
        title: "EFSA Assessment of Aspartame",
        link: "https://www.efsa.europa.eu/en/efsajournal/pub/3496",
        text: "EFSA's thorough assessment of aspartame supports its safety for human consumption, affirming the ADI guidelines."
      }
    ],
    breakdownUponDigestion: {
      text: "Aspartame is digested to phenylalanine, aspartic acid, and methanol—components found in much larger amounts in natural foods."
    },
    amountsInCommonItems: {
      text: "Diet sodas typically contain about 180 mg of aspartame per 12 oz serving, demonstrating its role in providing sweetness without the added calories of sugar."
    },
    comparisonWithNaturalFoods: {
      text: "The components resulting from aspartame digestion are part of regular diets, with methanol levels far below those found in fruits and juices, illustrating the misplaced concerns over its consumption."
    }
  },
  {
    id: 3,
    name: "Cyclamic Acid",
    type: "Artificial Sweeteners",
    overview: {
      generalInfo: "Cyclamic Acid, also known by its salts such as Sodium Cyclamate, is a synthetic sweetener approximately 30 to 50 times sweeter than sugar. It's widely used in various food and beverage products, offering a low-calorie alternative to sugar.",
      history: "Discovered in 1937, Cyclamic Acid was initially used during World War II as a table sweetener for soldiers. Its use expanded post-war into commercial food products. However, its approval status has varied across countries due to health concerns that arose in the late 20th century.",
      notablePoints: "Despite controversies, extensive research has reaffirmed the safety of Cyclamic Acid, leading to its reevaluation and reapproval in many regions. It's particularly noted for its stable sweetness in heat and diverse food processing conditions."
    },
    sweetnessRelativeToSugar: {
      value: 30,
      text: "Cyclamic Acid's significant sweetness over sugar enables its use in very small quantities, thus reducing the caloric content of sweetened products without compromising taste."
    },
    generalSafety: {
      text: "Subject to regulatory review and approval across various jurisdictions, Cyclamic Acid has been deemed safe for consumption within certain limits, reinstating its status as a viable sugar substitute in numerous markets."
    },
    safeDosage: {
      amount: "11 mg/kg of body weight per day",
      text: "The acceptable daily intake (ADI) for Cyclamic Acid is set conservatively to ensure consumer safety, allowing for its use in a wide range of food and beverage products."
    },
    practicalSafeDosageExample: {
      amountPer70kgAdult: 770,
      equivalentInDietSoda: "Varies significantly based on product formulation",
      text: "For an adult weighing 70 kg, the safe daily consumption translates to significantly more than the typical intake through diet sodas or other cyclamate-containing products, underscoring its safety margin."
    },
    benefitsComparedToSugar: {
      list: [
        "Facilitates calorie reduction for weight management.",
        "Does not influence blood glucose levels, making it diabetic-friendly.",
        "Contributes to dental health by reducing sugar-related tooth decay."
      ],
      text: "Cyclamic Acid offers an alternative for individuals looking to reduce caloric intake or manage diabetes without sacrificing sweetness."
    },
    primaryUses: "Cyclamic Acid is used in diet beverages, desserts, tabletop sweeteners, and various sugar-free or low-calorie food products, catering to consumers seeking sugar alternatives.",
    approvalByGoverningBodies: {
      details: [
        { country: "EU", name: "European Food Safety Authority (EFSA)", link: "https://www.efsa.europa.eu/" },
        { country: "Canada", name: "Health Canada", link: "https://www.canada.ca/en/health-canada.html" },
        { country: "UK", name: "Food Standards Agency", link: "https://www.food.gov.uk/" }
      ],
      text: "Regulatory bodies in the EU, Canada, and the UK, among others, have evaluated Cyclamic Acid's safety profile, leading to its approval for use within specified limits."
    },
    mythsVsFacts: {
      myth: "Cyclamic Acid is banned worldwide due to cancer risk.",
      fact: "While banned in the US, Cyclamic Acid has been reassessed and approved in over 50 countries based on extensive safety data, showing no direct link to cancer at consumption levels within the ADI."
    },
    sugarComparisons: {
      context: "Choosing Cyclamic Acid as a sweetener can significantly reduce caloric intake compared to sugar, supporting dietary management and health objectives without the high sugar content.",
      healthImplications: {
        text: "Reducing sugar consumption by opting for cyclamate-sweetened products can aid in managing weight, controlling diabetes, and promoting dental health."
      },
      broaderPerspective: "Incorporating cyclamate within a balanced diet offers a strategy for reducing sugar intake, aligning with broader nutritional goals and health outcomes."
    },
    studiesAndReferences: [
      {
        title: "EFSA Review on Cyclamic Acid",
        link: "https://www.efsa.europa.eu/en/efsajournal/pub/nd",
        text: "EFSA's scientific assessment confirms the safety of Cyclamic Acid, supporting its use under established ADI conditions."
      },
      {
        title: "Health Canada's Position on Cyclamic Acid",
        link: "https://www.canada.ca/en/health-canada.html",
        text: "Health Canada's endorsement further supports the safety and permissible use of Cyclamic Acid in food products."
      }
    ],
    breakdownUponDigestion: {
      text: "Cyclamic Acid is not metabolized by the human body and is excreted unchanged, contributing to its non-caloric nature."
    },
    amountsInCommonItems: {
      text: "The use of Cyclamic Acid in food products varies, but it remains a popular choice for diet sodas and tabletop sweeteners, providing sweetness without calories."
    },
    comparisonWithNaturalFoods: {
      text: "As a non-caloric sweetener that does not break down during digestion, Cyclamic Acid offers a sweetness solution without the metabolic effects associated with sugar."
    }
  },
  {
    id: 4,
    name: "Saccharin",
    type: "Artificial Sweeteners",
    overview: {
      generalInfo: "Saccharin is one of the oldest artificial sweeteners, discovered in 1879. It's a zero-calorie sweetener that's about 300 to 400 times sweeter than sucrose (table sugar).",
      history: "Initially used to sweeten foods and beverages without the calories of sugar, saccharin's popularity grew, especially during sugar shortages. Its safety was debated in the 20th century, but subsequent research has supported its safety in normal consumption levels.",
      notablePoints: "Saccharin is known for its heat stability, making it suitable for various food processing applications, including cooking and baking. It's often used in combination with other sweeteners to mask its bitter aftertaste."
    },
    sweetnessRelativeToSugar: {
      value: 300,
      text: "The intense sweetness of saccharin allows for its use in minimal quantities, significantly reducing the calorie content in sweetened products without sacrificing sweetness."
    },
    generalSafety: {
      text: "Decades of research have confirmed the safety of saccharin for human consumption. Major health organizations, including the WHO and the FDA, have determined that saccharin is safe to use within the recommended limits."
    },
    safeDosage: {
      amount: "5 mg/kg of body weight per day",
      text: "The acceptable daily intake (ADI) for saccharin ensures it can be consumed daily within this limit without posing a health risk, even over a lifetime."
    },
    practicalSafeDosageExample: {
      amountPer70kgAdult: 350,
      equivalentInDietSoda: "Approximately 9 to 12 cans, depending on the brand and formulation",
      text: "An adult weighing 70 kg can safely consume a significant quantity of saccharin-sweetened products well beyond typical consumption patterns."
    },
    benefitsComparedToSugar: {
      list: [
        "Supports weight management by offering a sweet taste without the calories.",
        "Does not affect blood glucose levels, suitable for people with diabetes.",
        "Does not contribute to dental caries, offering an advantage over sugar in oral health."
      ],
      text: "Saccharin provides a calorie-free sweetening option, contributing to dietary flexibility and health management without increasing sugar intake."
    },
    primaryUses: "Saccharin is widely used in soft drinks, tabletop sweeteners, baked goods, jams, chewing gum, toothpaste, and other dental care products.",
    approvalByGoverningBodies: {
      details: [
        { country: "EU", name: "European Food Safety Authority (EFSA)", link: "https://www.efsa.europa.eu/" },
        { country: "USA", name: "U.S. Food and Drug Administration (FDA)", link: "https://www.fda.gov/" },
        { country: "UK", name: "Food Standards Agency", link: "https://www.food.gov.uk/" }
      ],
      text: "Saccharin's use as a food additive has been reviewed and approved by various regulatory authorities worldwide, attesting to its safety when consumed within the established guidelines."
    },
    mythsVsFacts: {
      myth: "Saccharin is a direct cause of cancer in humans.",
      fact: "Extensive studies, including long-term human epidemiological studies, have shown no consistent evidence that saccharin is carcinogenic to humans at doses within the ADI."
    },
    sugarComparisons: {
      context: "Opting for saccharin as a sugar substitute can significantly aid in reducing overall caloric intake, crucial for weight management and metabolic health.",
      healthImplications: {
        text: "Choosing saccharin-sweetened products contributes to lower sugar consumption, aligning with health goals like reducing obesity risk and managing diabetes."
      },
      broaderPerspective: "While saccharin can play a role in a health-conscious diet, overall nutritional balance and lifestyle choices remain central to health and wellness."
    },
    studiesAndReferences: [
      {
        title: "FDA Statement on Saccharin",
        link: "https://www.fda.gov/food/food-additives-petitions/high-intensity-sweeteners",
        text: "The FDA provides an overview of saccharin's regulatory history and its determination of safety for use in food and beverages."
      },
      {
        title: "EFSA Assessment on Saccharin",
        link: "https://www.efsa.europa.eu/en/efsajournal/pub/nd",
        text: "The EFSA's scientific opinion on saccharin reaffirms its safety, supporting its continued use under current guidelines."
      }
    ],
    breakdownUponDigestion: {
      text: "Saccharin is not metabolized by the body; it is excreted unchanged in the urine. This contributes to its effectiveness as a non-caloric sweetener."
    },
    amountsInCommonItems: {
      text: "Saccharin is commonly found in diet beverages, with amounts varying based on product formulation to achieve the desired sweetness without calories."
    },
    comparisonWithNaturalFoods: {
      text: "Saccharin, unlike sugars naturally present in food, does not provide calories or affect insulin levels, making it a useful tool in managing dietary sugar intake."
    }
  }
  
  
]


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
      generalInfo: "Aspartame is a low-calorie artificial sweetener, about 200 times sweeter than sugar. It's commonly found in diet beverages, sugar-free gum, and low-calorie desserts, providing a sweet taste without the calories of sugar.",
      history: "Discovered in 1965 and approved by the FDA in 1981, aspartame is one of the most studied food additives in the world, deemed safe for consumption by over 100 countries and major regulatory agencies.",
      notablePoints: "Aspartame consists of two amino acids, phenylalanine and aspartic acid, which are naturally occurring in protein-containing foods and metabolized by the body similarly to other proteins."
    },
    sweetnessRelativeToSugar: {
      value: 200,
      text: "Aspartame's high sweetness level allows for much smaller quantities to be used in food products, offering a significant reduction in caloric intake when substituting for sugar."
    },
    generalSafety: "Extensive scientific research and reviews by regulatory bodies worldwide, including the FDA, EFSA, and WHO, have consistently confirmed aspartame's safety for the general population, including pregnant women and children, within established acceptable daily intake (ADI) guidelines.",
    safeDosage: {
      amount: 40,
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
    generalSafety: "Subject to regulatory review and approval across various jurisdictions, Cyclamic Acid has been deemed safe for consumption within certain limits, reinstating its status as a viable sugar substitute in numerous markets.",
    safeDosage: {
      amount: 11,
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
    generalSafety: "Decades of research have confirmed the safety of saccharin for human consumption. Major health organizations, including the WHO and the FDA, have determined that saccharin is safe to use within the recommended limits.",
    safeDosage: {
      amount: 5,
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
  },
  {
    id: 5,
    name: "Sucralose",
    type: "Artificial Sweeteners",
    overview: {
      generalInfo: "Sucralose is a no-calorie artificial sweetener derived from sugar. It is approximately 600 times sweeter than sucrose (table sugar), allowing for its use in minute quantities to achieve a sweet taste without the calories associated with sugar.",
      history: "Discovered in 1976, sucralose was approved for use in foods and beverages by the FDA in 1998. It has gained popularity worldwide due to its sugar-like taste and stability under heat, making it suitable for a wide range of products.",
      notablePoints: "Unlike some other sweeteners, sucralose does not have a bitter aftertaste and does not break down under heat, which makes it a preferred sweetener for cooking and baking as well as in processed foods."
    },
    sweetnessRelativeToSugar: {
      value: 600,
      text: "Due to its high sweetness intensity, only a small amount of sucralose is needed to achieve the desired level of sweetness, making it a cost-effective and calorie-saving alternative to sugar."
    },
    generalSafety: "Extensive scientific research and regulatory review have affirmed sucralose's safety for the general population, including individuals with diabetes, pregnant women, and children, within the acceptable daily intake (ADI) limits.",
    safeDosage: {
      amount: 5,
      text: "The ADI for sucralose is set at a level that can be consumed every day over a lifetime without posing a risk to health."
    },
    practicalSafeDosageExample: {
      amountPer70kgAdult: 350,
      equivalentInDietSoda: "Approximately 40 to 60 cans, depending on the brand and formulation",
      text: "For an adult weighing 70 kg, the safe daily intake of sucralose would be equivalent to consuming an unusually large number of cans of diet soda, highlighting the difficulty of reaching this limit through normal dietary consumption."
    },
    benefitsComparedToSugar: {
      list: [
        "Enables significant calorie reduction in diets, aiding weight management.",
        "Does not contribute to tooth decay.",
        "Suitable for individuals managing blood sugar levels, including those with diabetes."
      ],
      text: "Sucralose offers the sweet taste of sugar without its caloric impact, supporting dietary goals and health management without compromising taste."
    },
    primaryUses: "Sucralose is used in a vast array of products, including beverages, baked goods, candies, dessert mixes, breakfast bars, and tabletop sweeteners, due to its versatility and stability.",
    approvalByGoverningBodies: {
      details: [
        { country: "EU", name: "European Food Safety Authority (EFSA)", link: "https://www.efsa.europa.eu/" },
        { country: "USA", name: "U.S. Food and Drug Administration (FDA)", link: "https://www.fda.gov/" },
        { country: "UK", name: "Food Standards Agency", link: "https://www.food.gov.uk/" }
      ],
      text: "Sucralose has been thoroughly reviewed and approved for use by major health and safety organizations around the world."
    },
    mythsVsFacts: {
      myth: "Sucralose is harmful to health and contributes to serious diseases.",
      fact: "Scientific studies and reviews by health authorities globally have shown no evidence that sucralose consumption within the ADI contributes to serious diseases, including cancer."
    },
    sugarComparisons: {
      context: "Using sucralose as an alternative to sugar can drastically reduce caloric intake and sugar consumption, supporting healthier dietary choices and weight management strategies.",
      healthImplications: {
        text: "Opting for sucralose-sweetened products over those with sugar can help mitigate risks associated with high sugar diets, such as obesity, diabetes, and tooth decay."
      },
      broaderPerspective: "While sucralose can play a beneficial role in reducing sugar intake, maintaining overall dietary balance and engaging in regular physical activity are crucial for health."
    },
    studiesAndReferences: [
      {
        title: "FDA Overview on Sucralose",
        link: "https://www.fda.gov/food/food-additives-petitions/high-intensity-sweeteners",
        text: "The FDA's information on sucralose outlines its approval and safety evaluation, supporting its use in food products."
      },
      {
        title: "EFSA Conclusion on Sucralose",
        link: "https://www.efsa.europa.eu/en/efsajournal/pub/nd",
        text: "EFSA's scientific review supports the safety of sucralose, affirming its role as a safe sugar substitute within established guidelines."
      }
    ],
    breakdownUponDigestion: {
      text: "Sucralose is not metabolized by the body for energy. Most of it is not absorbed from the gut, and the absorbed portion is excreted unchanged."
    },
    amountsInCommonItems: {
      text: "Sucralose is commonly used in diet beverages, sugar-free desserts, and low-calorie meal replacements, providing sweetness without the added calories of sugar."
    },
    comparisonWithNaturalFoods: {
      text: "Sucralose provides a sweetening option without the metabolic and dental health impacts of sugar, aligning with dietary recommendations for reduced sugar consumption."
    }
  },
  {
    id: 6,
    name: "Thaumatin",
    type: "Natural Sweeteners",
    overview: {
    generalInfo: "Thaumatin is a sweet-tasting protein derived from the katemfe fruit of West Africa. It's notable for being approximately 2000 times sweeter than sugar, making it one of the most potent sweeteners available.",
    history: "Used traditionally in West Africa to sweeten foods, thaumatin's unique properties were recognized by the global food industry in the 1970s. It has since been employed not only for its sweetness but also for its flavor-enhancing qualities.",
    notablePoints: "Thaumatin is distinguished by its completely natural origin and its ability to improve the overall taste profile of foods and beverages, beyond just providing sweetness. It is also heat-stable and maintains its sweetness in a wide pH range."
    },
    sweetnessRelativeToSugar: {
    value: 2000,
    text: "Thaumatin is about 2000 times sweeter than sugar, meaning a little goes a long way in achieving the desired sweetness without the calories."
    },
    generalSafety: "Thaumatin is recognized as safe by various international regulatory bodies. Its natural origin and extensive use in foods have supported its acceptance as a safe additive for enhancing flavor and sweetness.",
    safeDosage: {
    amount: 10,
    text: "Due to its natural origin and the small amounts required for sweetening, a specific ADI for thaumatin has not been established, reflecting its wide margin of safety."
    },
    practicalSafeDosageExample: {
    amountPer70kgAdult: 1050,
    equivalentInDietSoda: "26 cans for a 70kg adult, highlighting the safety margin given thaumatin's potency.",
    text: "Given the lack of a specified ADI and the minute quantities needed for effective sweetening, the risk of consuming excessive amounts of thaumatin is exceptionally low under normal dietary conditions."
    },
    benefitsComparedToSugar: {
    list: [
    "Supports reductions in calorie and sugar intake without compromising taste.",
    "Does not affect blood glucose levels, offering a sweetening option for individuals with diabetes.",
    "Contributes positively to dental health by not promoting tooth decay."
    ],
    text: "Thaumatin presents a natural, effective alternative to sugar, enabling consumers to enjoy sweetness with added health benefits."
    },
    primaryUses: "Primarily used in chewing gum, dairy products, and as a flavor enhancer in beverages, thaumatin's application extends to a broad range of products seeking natural sweetening solutions.",
    approvalByGoverningBodies: {
    details: [
    { country: "EU", name: "European Food Safety Authority (EFSA)", link: "https://www.efsa.europa.eu/" },
    { country: "USA", name: "U.S. Food and Drug Administration (FDA)", link: "https://www.fda.gov/" },
    { country: "UK", name: "Food Standards Agency", link: "https://www.food.gov.uk/" }
    ],
    text: "Despite its relatively recent introduction to the market, thaumatin has gained approval from major health organizations, underlining its safety and efficacy as a sweetener and flavor enhancer."
    },
    mythsVsFacts: {
    myth: "Natural sweeteners like thaumatin can cause the same health issues as artificial sweeteners.",
    fact: "Thaumatin, derived from a natural source, has been shown to be safe for consumption. It provides a healthful alternative to both sugar and synthetic sweeteners, without the associated risks."
    },
    sugarComparisons: {
    context: "Thaumatin's role goes beyond sweetening, enhancing flavors and improving product profiles, offering a multifaceted benefit not achievable with sugar or other sweeteners.",
    healthImplications: {
    text: "Utilizing thaumatin can aid in reducing caloric intake and managing health concerns related to sugar consumption, such as obesity and diabetes, contributing to a healthier lifestyle."
    },
    broaderPerspective: "Incorporating thaumatin into a balanced diet emphasizes the importance of diverse, health-conscious food choices and the role of natural sweeteners in achieving dietary goals."
    },
    studiesAndReferences: [
    {
    title: "EFSA Panel on Thaumatin Safety",
    link: "https://www.efsa.europa.eu/en/efsajournal/pub/nd",
    text: "The European Food Safety Authority provides an assessment of thaumatin, affirming its safety and suitability for use in a variety of food and beverage products."
    }
    ],
    breakdownUponDigestion: {
    text: "As a protein, thaumatin is digested similarly to other dietary proteins, broken down into amino acids by the body's enzymatic processes without producing harmful byproducts."
    },
    amountsInCommonItems: {
    text: "Due to its high potency, thaumatin is used in trace amounts in food products, significantly reducing the need for sugar without compromising on sweetness."
    },
    comparisonWithNaturalFoods: {
    text: "Thaumatin stands out for its natural origin and functionality as a sweetener and flavor enhancer, providing a sweet taste that is difficult to achieve with conventional sugar or other natural sweeteners."
    }
    } ,
    {
      id: 7,
      name: "Neohesperidine DC",
      type: "Artificial Sweeteners",
      overview: {
        generalInfo: "Neohesperidine dihydrochalcone (Neohesperidine DC) is a sweetener derived from the bitter orange. It is known for its intense sweetness, estimated to be up to 1500 times sweeter than sugar, making it highly effective in small quantities.",
        history: "Developed from the flavonoid neohesperidin found in citrus fruits, Neohesperidine DC was discovered as part of efforts to find new, potent sweeteners with favorable safety profiles. Its use has been particularly valued for its ability to enhance flavor profiles beyond mere sweetness.",
        notablePoints: "The sweetener is appreciated not only for its sweetness but also for its ability to improve the taste of food products by masking bitter flavors, making it a popular choice for a wide range of applications."
      },
      sweetnessRelativeToSugar: {
        value: 1500,
        text: "The high sweetness level of Neohesperidine DC allows for its use in minimal amounts to achieve desired sweetness, contributing to calorie control in dietetic foods and beverages."
      },
      generalSafety: "Recognized as safe by food safety authorities, Neohesperidine DC's consumption within recommended limits has not shown adverse effects, endorsing its use in food and drink products.",
      safeDosage: {
        amount: 5,
        text: "This ADI ensures that Neohesperidine DC can be safely consumed daily without health risks, supporting its inclusion in dietary products."
      },
      practicalSafeDosageExample: {
        amountPer70kgAdult: 350,
        equivalentInDietSoda: "Given its potency, the equivalent in diet soda would significantly exceed typical consumption patterns, underscoring its safety margin."
      },
      benefitsComparedToSugar: {
        list: [
          "Helps reduce calorie intake while maintaining sweetness.",
          "Does not contribute to tooth decay.",
          "Can be used by individuals with diabetes, as it does not raise blood sugar levels."
        ],
        text: "Neohesperidine DC offers an alternative to sugar that supports health and dietary goals, including weight management and dental health."
      },
      primaryUses: "Its applications range from beverages and desserts to sauces and chewing gum, where it enhances flavor and sweetness without the caloric impact of sugars.",
      approvalByGoverningBodies: {
        details: [
          { country: "EU", name: "European Food Safety Authority (EFSA)", link: "https://www.efsa.europa.eu/" },
          { country: "USA", name: "U.S. Food and Drug Administration (FDA)", link: "https://www.fda.gov/" }
        ],
        text: "Approved for use by the EFSA and FDA among others, Neohesperidine DC is recognized for its safety and effectiveness as a sweetener."
      },
      mythsVsFacts: {
        myth: "Artificial sweeteners like Neohesperidine DC are unhealthy and cause weight gain.",
        fact: "Research indicates that when used as part of a balanced diet, Neohesperidine DC and similar sweeteners do not cause weight gain or adverse health effects, offering a sweet taste with fewer calories."
      },
      sugarComparisons: {
        context: "Neohesperidine DC's role extends beyond just providing sweetness, as it helps in reducing caloric intake and managing dietary health without sacrificing taste.",
        healthImplications: {
          text: "Substituting sugar with Neohesperidine DC in foods and beverages can aid in weight management, dental health, and glycemic control, contributing to overall health and well-being."
        },
        broaderPerspective: "While the use of Neohesperidine DC is a useful tool in dietary management, maintaining a balanced diet and healthy lifestyle remains paramount for health."
      },
      studiesAndReferences: [
        {
          title: "EFSA Evaluation of Neohesperidine DC",
          link: "https://www.efsa.europa.eu/en/efsajournal/pub/nd",
          text: "EFSA's scientific review affirms the safety of Neohesperidine DC, supporting its use within established ADI guidelines."
        }
      ],
      breakdownUponDigestion: "Neohesperidine DC undergoes metabolic processes similar to other dietary flavonoids, with its metabolites excreted, indicating no accumulation in the body.",
      amountsInCommonItems: "Used sparingly due to its high sweetness, the exact amount in consumer products varies, tailored to achieve the desired flavor enhancement and sweetness without added calories.",
      comparisonWithNaturalFoods: "Comparing Neohesperidine DC with natural foods highlights its role in offering a high-intensity sweetening option that aids in reducing sugar and calorie content in the diet."
    }
    ,
    {
      id: 8,
      name: "Neotame",
      type: "Artificial Sweeteners",
      overview: {
        generalInfo: "Neotame is a no-calorie artificial sweetener derived from the same family as aspartame, but significantly sweeter and more stable. It's about 7,000 to 13,000 times sweeter than table sugar.",
        history: "Developed to provide a sweet taste without the calories of sugar, Neotame was approved by the FDA in 2002. Its chemical structure is similar to aspartame's but modified to be free from the phenylalanine content, making it safe for people with phenylketonuria (PKU).",
        notablePoints: "Neotame's high potency means it can be used in extremely small amounts to achieve the desired sweetness, reducing the need for sugars in foods and beverages and contributing to calorie control."
      },
      sweetnessRelativeToSugar: "The extraordinary sweetness of Neotame allows for its use in tiny quantities, making it a highly effective sweetening agent in a wide range of products.",
      generalSafety: "Extensively studied and reviewed by global food safety authorities, Neotame has been deemed safe for consumption within the established acceptable daily intake (ADI) guidelines.",
      safeDosage: "The ADI for Neotame reflects its safe consumption level, allowing individuals to enjoy sweetened products without exceeding health risk thresholds.",
      practicalSafeDosageExample: "Given Neotame's high sweetness, the equivalent in diet soda would vastly exceed normal consumption patterns, emphasizing its safety margin.",
      benefitsComparedToSugar: [
        "Contributes to significant calorie reduction in the diet.",
        "Does not affect blood glucose levels, making it suitable for diabetics.",
        "Helps in dental health by not promoting tooth decay."
      ],
      primaryUses: "Due to its stability under heat and wide pH range, Neotame is used in a variety of foods, including baked goods, soft drinks, candies, and as a tabletop sweetener.",
      approvalByGoverningBodies: [
        "EU: European Food Safety Authority (EFSA) - [EFSA](https://www.efsa.europa.eu/)",
        "USA: U.S. Food and Drug Administration (FDA) - [FDA](https://www.fda.gov/)",
        "UK: Food Standards Agency - [Food Standards Agency](https://www.food.gov.uk/)"
      ],
      mythsVsFacts: "Scientific evidence supports the safety of Neotame when consumed within ADI limits. Its structure, while similar to aspartame, is such that it does not pose the same risks to individuals with PKU, among other safety considerations.",
      sugarComparisons: "Switching to Neotame from sugar in food and beverage products can drastically reduce the caloric content, aiding in weight management and reducing risks associated with high sugar consumption.",
      studiesAndReferences: [
        "FDA Review on Neotame - [FDA](https://www.fda.gov/food/food-additives-petitions/high-intensity-sweeteners)",
        "EFSA Conclusion on Neotame Safety - [EFSA](https://www.efsa.europa.eu/en/efsajournal/pub/nd)"
      ],
      breakdownUponDigestion: "Neotame is metabolically stable, meaning it is not broken down or stored in the body, thus not contributing to caloric intake or affecting blood sugar levels.",
      amountsInCommonItems: "Used sparingly due to its potency, Neotame is found in minute quantities in food products, significantly reducing their sugar and calorie content.",
      comparisonWithNaturalFoods: "As a high-intensity sweetener, Neotame's role in reducing dietary sugar intake showcases its potential benefits in public health, particularly in combating obesity and diabetes."
    }
    ,    
    {
      id: 9,
      name: "Salt of Aspartame-Acesulfame",
      type: "Artificial Sweeteners",
      overview: {
        generalInfo: "Salt of Aspartame-Acesulfame, also known as Aspartame-acesulfame salt, is a blend of two potent sweeteners to create a synergistic effect, enhancing sweetness. It is approximately 350 times sweeter than sugar.",
        history: "Developed to utilize the synergistic sweetening effect of aspartame and acesulfame K, this compound offers improved taste and stability compared to its components used individually. It was introduced to provide a more cost-effective sweetening solution with lower usage levels required.",
        notablePoints: "This sweetener is particularly noted for its ability to provide a sugar-like taste profile, making it suitable for a wide variety of applications, including beverages, desserts, and confectionery."
      },
      sweetnessRelativeToSugar: "The enhanced sweetness level allows for its use in smaller amounts, providing significant calorie reduction in products sweetened with this compound.",
      generalSafety: "Recognized as safe by food safety authorities, the salt of aspartame-acesulfame's consumption within established limits has shown no adverse effects, supporting its use in food and beverage applications.",
      safeDosage: "Given the blend's components, aspartame and acesulfame K, have their own ADIs, the compound's use is regulated based on these standards, ensuring consumer safety.",
      practicalSafeDosageExample: "The amount of Salt of Aspartame-Acesulfame consumed in diet products is far below the ADI levels for aspartame and acesulfame K, indicating a wide margin of safety for daily intake.",
      benefitsComparedToSugar: [
        "Enables a significant reduction in the caloric content of sweetened products.",
        "Does not contribute to dental caries.",
        "Suitable for individuals with diabetes as it does not raise blood glucose levels."
      ],
      primaryUses: "Used extensively in food and beverage industries to replicate the taste of sugar closely, enhancing product appeal while reducing caloric content.",
      approvalByGoverningBodies: [
        "EU: European Food Safety Authority (EFSA) - [EFSA](https://www.efsa.europa.eu/)",
        "USA: U.S. Food and Drug Administration (FDA) - [FDA](https://www.fda.gov/)"
      ],
      mythsVsFacts: "Scientific research indicates that the combination of aspartame and acesulfame in the form of a salt does not pose health risks when consumed within recommended limits.",
      sugarComparisons: "Choosing products sweetened with Salt of Aspartame-Acesulfame can play a significant role in managing daily caloric and sugar intake, supporting overall health objectives.",
      studiesAndReferences: [
        "Safety Assessment of Aspartame-Acesulfame Salt - [ScienceDirect](https://www.sciencedirect.com)"
      ],
      breakdownUponDigestion: "Like its component sweeteners, the Salt of Aspartame-Acesulfame is metabolized in the body into its constituent parts, each with a well-established safety profile.",
      amountsInCommonItems: "The compound is used in various food and beverage products, enhancing sweetness with minimal caloric contribution.",
      comparisonWithNaturalFoods: "In contrast to natural sugars, the Salt of Aspartame-Acesulfame provides a calorie-free sweetness, contributing to dietary flexibility and health maintenance without the drawbacks of sugar."
    }
    ,
    {
      id: 10,
      name: "Advantame",
      type: "Artificial Sweeteners",
      overview: {
        generalInfo: "Advantame is an ultra-high potency artificial sweetener derived from similar compounds as aspartame and vanillin. It's one of the newest sweeteners on the market, notable for being approximately 20,000 to 37,000 times sweeter than sucrose (table sugar).",
        history: "Approved by the FDA in 2014, Advantame has been recognized for its sweetness and utility in a variety of food and beverage products without the need for phenylalanine warning labels that aspartame requires.",
        notablePoints: "Its significant sweetness allows for its use in very small amounts, contributing to calorie reduction and cost savings in product formulation without impacting blood sugar levels."
      },
      sweetnessRelativeToSugar: {
        value: 20000,
        text: "Advantame's extreme sweetness efficiency means it can be used sparingly to achieve the desired taste, making it an economical and health-conscious choice for manufacturers and consumers alike."
      },
      generalSafety: "Extensive testing and regulatory review have established Advantame's safety for the general population, including pregnant women and children, within the acceptable daily intake (ADI) guidelines.",
      safeDosage: {
        amount: 33,
        text: "The established ADI for Advantame reflects its safe consumption level, allowing for substantial usage without approaching health risk thresholds."
      },
      practicalSafeDosageExample: {
        amountPer70kgAdult: 2296,
        equivalentInDietSoda: "Given Advantame's potency, the equivalent in diet soda would be astronomically high, far exceeding normal consumption patterns."
      },
      benefitsComparedToSugar: [
        "Facilitates significant reductions in sugar and calorie content of foods and beverages.",
        "Does not promote tooth decay.",
        "Suitable for use by individuals with diabetes due to its minimal impact on blood glucose levels."
      ],
      primaryUses: "Advantame is versatile in application, suitable for use in baking, beverages, confectionery, and dairy products, thanks to its stability under heat and broad pH range.",
      approvalByGoverningBodies: [
        "EU: European Food Safety Authority (EFSA) - [EFSA](https://www.efsa.europa.eu/)",
        "USA: U.S. Food and Drug Administration (FDA) - [FDA](https://www.fda.gov/)",
        "UK: Food Standards Agency - [Food Standards Agency](https://www.food.gov.uk/)"
      ],
      mythsVsFacts: "Scientific assessments and regulatory approvals confirm that Advantame, when used within ADI limits, is safe for the general population without posing risks of disease.",
      sugarComparisons: "Utilizing Advantame as an alternative to sugar can contribute to a considerable reduction in the intake of sugars and calories, aiding in the prevention of diet-related health issues.",
      studiesAndReferences: [
        "FDA Approval of Advantame - [FDA](https://www.fda.gov/food/food-additives-petitions/high-intensity-sweeteners)",
        "EFSA Assessment on Advantame - [EFSA](https://www.efsa.europa.eu/en/efsajournal/pub/nd)"
      ],
      breakdownUponDigestion: "Advantame is metabolized in the body similarly to aspartame, though it is significantly more potent and requires smaller quantities for the same sweetening effect, minimizing exposure.",
      amountsInCommonItems: "Due to its high sweetness, Advantame is used in trace amounts in a wide range of products, effectively reducing their overall calorie and sugar content.",
      comparisonWithNaturalFoods: "Advantame's role in reducing sugar consumption illustrates its potential in supporting public health initiatives aimed at reducing obesity and diabetes prevalence."
    },
    {
      id: 11,
      name: "Steviol Glycosides from Stevia",
      type: "Natural Sweeteners",
      overview: {
        generalInfo: "Steviol glycosides, derived from the leaves of the Stevia rebaudiana plant, are natural sweeteners that provide a calorie-free option up to 300 times sweeter than sugar. They have been used for centuries in South America for their sweetening properties and have gained global popularity as a sugar alternative.",
        history: "The use of Stevia as a sweetener dates back to the indigenous Guaraní people of South America. The extraction and purification of steviol glycosides for use as sweeteners began in earnest in the 20th century, with significant growth in popularity and regulatory approval occurring in the early 21st century.",
        notablePoints: "Steviol glycosides are unique among sweeteners for being derived from a plant source, offering a natural alternative to synthetic sweeteners. They have a negligible effect on blood glucose levels, making them a popular choice for people with diabetes and those managing their calorie intake."
      },
      sweetnessRelativeToSugar: {
        value: 300,
        text: "The high sweetness level of steviol glycosides means that they can be used in very small amounts to achieve the desired sweetness, reducing the need for sugars in foods and beverages."
      },
      generalSafety: "Extensive research and regulatory review have established the safety of steviol glycosides for the general population, including pregnant women and children, within acceptable daily intake (ADI) guidelines.",
      safeDosage: {
        amount: 4,
        text: "The ADI for steviol glycosides is set to ensure that daily consumption remains within a safe range, allowing consumers to enjoy sweetened products without health risks."
      },
      practicalSafeDosageExample: {
        amountPer70kgAdult: 280,
        equivalentInDietSoda: "The equivalent safe daily intake for a 70 kg adult would translate to consuming an exceptionally large amount of diet soda sweetened with stevia, well beyond typical consumption patterns."
      },
      benefitsComparedToSugar: [
        "Supports dietary efforts to reduce caloric intake.",
        "Does not contribute to tooth decay.",
        "Compatible with diabetic diets due to minimal impact on blood sugar."
      ],
      primaryUses: "Widely used in beverages, baked goods, and as a tabletop sweetener, steviol glycosides are favored for their natural origin and sweetness profile, which complements a variety of foods and dietary preferences.",
      approvalByGoverningBodies: [
        "EU: European Food Safety Authority (EFSA) - [EFSA](https://www.efsa.europa.eu/)",
        "USA: U.S. Food and Drug Administration (FDA) - [FDA](https://www.fda.gov/)",
        "UK: Food Standards Agency - [Food Standards Agency](https://www.food.gov.uk/)"
      ],
      mythsVsFacts: "Contrary to myths, steviol glycosides have been rigorously tested and found to be safe for consumption, offering a healthful alternative to sugar and artificial sweeteners.",
      sugarComparisons: "Opting for steviol glycosides over sugar can significantly reduce calorie and sugar intake, aiding in weight management and reducing the risk of sugar-related health issues.",
      studiesAndReferences: [
        "EFSA Panel on Steviol Glycosides - [EFSA](https://www.efsa.europa.eu/en/efsajournal/pub/nd)"
      ],
      breakdownUponDigestion: "Steviol glycosides are not metabolized by the body for energy. Instead, they are broken down into steviol, which is then excreted, ensuring they do not contribute to caloric intake or affect blood glucose levels.",
      amountsInCommonItems: "Due to their intense sweetness, steviol glycosides are used in minute quantities in food products, effectively providing sweetness without added calories.",
      comparisonWithNaturalFoods: "Unlike sugar, which provides calories and affects glycemic response, steviol glycosides offer a calorie-free sweetness, aligning with dietary recommendations for reduced sugar consumption."
    },
    {
      id: 12,
      name: "Enzymatically Produced Steviol Glycosides",
      type: "Natural Sweeteners",
      overview: {
        generalInfo: "Enzymatically produced steviol glycosides are a newer category of sweeteners derived from the Stevia plant. Through a process involving specific enzymes, certain steviol glycosides are modified or enhanced to improve their taste and stability, making them up to 400 times sweeter than sugar.",
        history: "This innovative approach to producing steviol glycosides aims to optimize the sweetening potential of the Stevia plant by selectively increasing the concentration of the most desirable glycosides. This method has gained attention for its efficiency and ability to produce a cleaner, more sugar-like taste.",
        notablePoints: "The enzymatic production process allows for the creation of steviol glycosides with improved solubility and stability, enabling broader application in food and beverage products without impacting blood glucose levels."
      },
      sweetnessRelativeToSugar: {
        value: 400,
        text: "Due to their enhanced sweetness, enzymatically produced steviol glycosides can be used in even smaller amounts than traditional Stevia extracts, contributing to significant calorie reduction in sweetened products."
      },
      generalSafety: "Similar to naturally extracted steviol glycosides, the enzymatically produced variants have undergone rigorous safety assessments and have been deemed safe for consumption by health authorities worldwide.",
      safeDosage: {
        amount: 4,
        text: "The acceptable daily intake (ADI) for these sweeteners, like that of naturally extracted steviol glycosides, ensures they can be consumed safely within these guidelines."
      },
      practicalSafeDosageExample: {
        amountPer70kgAdult: 280,
        equivalentInDietSoda: "For an adult weighing 70 kg, the safe daily consumption translates to an amount well beyond the typical use in diet sodas and other sweetened products."
      },
      benefitsComparedToSugar: [
        "Promotes a reduction in calorie intake without sacrificing sweetness.",
        "Does not contribute to dental caries.",
        "Suitable for individuals with diabetes as it does not influence blood glucose levels."
      ],
      primaryUses: "These sweeteners find application in a wide array of products, including beverages, confectionery, baked goods, and dairy, thanks to their enhanced taste profile and stability.",
      approvalByGoverningBodies: [
        "EU: European Food Safety Authority (EFSA) - [EFSA](https://www.efsa.europa.eu/)",
        "USA: U.S. Food and Drug Administration (FDA) - [FDA](https://www.fda.gov/)"
      ],
      mythsVsFacts: "Despite being produced through an enzymatic process, these sweeteners are derived from natural sources and have been confirmed as safe through extensive testing.",
      sugarComparisons: "Choosing foods and beverages sweetened with enzymatically produced steviol glycosides can significantly aid in reducing sugar and caloric intake, supporting a healthier lifestyle.",
      studiesAndReferences: [
        "Safety Assessment of Enzymatically Modified Steviol Glycosides - [ScienceDirect](https://www.sciencedirect.com)"
      ],
      breakdownUponDigestion: "Like other steviol glycosides, those produced enzymatically are not metabolized for energy but are broken down into steviol and then excreted, ensuring no caloric intake.",
      amountsInCommonItems: "Utilized in minimal amounts due to their high sweetness, these sweeteners enable the production of low-calorie, sugar-free options in various food and beverage categories.",
      comparisonWithNaturalFoods: "As a sugar alternative, enzymatically produced steviol glycosides offer a way to enjoy sweet tastes without the caloric impact, making them a preferable option for health-conscious consumers."
    },
    {
      id: 13,
      name: "Polyglycitol Syrup",
      type: "Sugar Alcohol",
      overview: {
        generalInfo: "Polyglycitol syrup, also known as hydrogenated starch hydrolysate, is a mixture of sugar alcohols derived from the hydrogenation of a mixture of glucose and maltose. It is less sweet than sugar and used as a bulk sweetener in a variety of low-calorie and sugar-free foods.",
        history: "Developed as part of the sugar alcohol family for its low-digestible features, polyglycitol syrup is utilized to provide sweetness without the full caloric content of regular sugars, aiding in the production of foods that can be consumed by those looking to manage calorie intake or blood sugar levels.",
        notablePoints: "The syrup is particularly noted for its minimal impact on blood sugar levels, making it suitable for diabetic products. It also has a high tolerance level in the digestive system, reducing the risk of laxative effects compared to other sugar alcohols."
      },
      sweetnessRelativeToSugar: {
        value: 50,
        text: "Polyglycitol syrup's sweetness varies but is generally about 50% as sweet as sucrose, making it a versatile ingredient in creating mildly sweet and sugar-free products."
      },
      generalSafety: "Recognized as safe by various health authorities, polyglycitol syrup can be included in the diet within reasonable consumption limits to avoid gastrointestinal discomfort, which is common with overconsumption of sugar alcohols.",
      safeDosage: {
        amount: 10,
        text: "While there is no specified ADI for polyglycitol syrup, moderate consumption is recommended to minimize digestive upset."
      },
      practicalSafeDosageExample: "Individual tolerance levels vary, but staying below 50 grams per day can help prevent gastrointestinal symptoms for most people.",
      benefitsComparedToSugar: [
        "Provides a lower-calorie alternative to sugar, supporting weight management goals.",
        "Does not contribute significantly to blood sugar spikes, making it suitable for diabetic diets.",
        "Has a lower risk of dental caries compared to sucrose."
      ],
      primaryUses: "Commonly used in sugar-free candies, gum, and baked goods, where it provides bulk and sweetness without the calories or dental risks of sugars.",
      approvalByGoverningBodies: [
        "EU: European Food Safety Authority (EFSA) - [EFSA](https://www.efsa.europa.eu/)",
        "USA: U.S. Food and Drug Administration (FDA) - [FDA](https://www.fda.gov/)"
      ],
      mythsVsFacts: "While overconsumption can lead to gastrointestinal discomfort, moderate intake of polyglycitol syrup is safe and provides a lower-calorie, lower-glycemic alternative to sugar.",
      sugarComparisons: "Incorporating polyglycitol syrup as a sugar substitute can assist in reducing caloric and sugar intake, important for maintaining a healthy diet and managing weight.",
      studiesAndReferences: [
        "Review of Polyglycitol Syrup Safety - [ScienceDirect](https://www.sciencedirect.com)"
      ],
      breakdownUponDigestion: "As a sugar alcohol, polyglycitol syrup is partially absorbed and metabolized by the body, contributing fewer calories than sugar and having less of an effect on blood glucose levels.",
      amountsInCommonItems: "Used as a bulk sweetener, polyglycitol syrup's presence in food products contributes to sweetness and texture without significantly increasing caloric content.",
      comparisonWithNaturalFoods: "Unlike natural sugars, which can affect blood sugar and caloric intake, polyglycitol syrup offers a sweetening option that mitigates these concerns, making it a preferable choice for health-conscious consumers and those with dietary restrictions."
    },
    {
      id: 14,
      name: "Sorbitol",
      type: "Sugar Alcohol",
      overview: {
        generalInfo: "Sorbitol is a sugar alcohol with a sweet taste which the human body metabolizes slowly. It is used in various sugar-free and low-calorie foods to provide sweetness similar to sugar but with fewer calories.",
        history: "Sorbitol was first isolated in the 1860s from the berries of the mountain ash tree. It has since become widely used in food, pharmaceutical, and cosmetic industries due to its unique properties.",
        notablePoints: "Apart from its use as a sweetener, sorbitol also acts as a humectant in cosmetics and pharmaceuticals, helping to preserve moisture."
      },
      sweetnessRelativeToSugar: {
        value: 60,
        text: "Sorbitol is about 60% as sweet as sucrose, making it a popular choice for providing a mild sweetness without the full caloric impact of sugar."
      },
      generalSafety: "Sorbitol is recognized as safe for consumption by food safety authorities worldwide. However, excessive consumption can lead to digestive discomfort, including gas and bloating.",
      safeDosage: {
        amount: 50,
        text: "While sorbitol is safe for daily consumption, individuals are advised to consume it in moderation to avoid gastrointestinal side effects."
      },
      practicalSafeDosageExample: "Moderation is key, as consuming more than 50 grams of sorbitol daily can lead to digestive issues for some people.",
      benefitsComparedToSugar: [
        "Lower calorie content than sugar, aiding in weight management.",
        "Does not cause a rapid increase in blood glucose levels, making it suitable for people with diabetes.",
        "Contributes less to tooth decay compared to traditional sugars."
      ],
      primaryUses: "Widely used in sugar-free chewing gums, candies, ice cream, and diabetic and low-calorie foods.",
      approvalByGoverningBodies: [
        "EU: European Food Safety Authority (EFSA) - [EFSA](https://www.efsa.europa.eu/)",
        "USA: U.S. Food and Drug Administration (FDA) - [FDA](https://www.fda.gov/)"
      ],
      mythsVsFacts: "Although some believe sugar alcohols like sorbitol can negatively impact health, they are generally safe when consumed in moderation and can offer benefits for weight and blood sugar management.",
      sugarComparisons: "Choosing sorbitol-sweetened products can significantly reduce caloric intake and sugar-related health risks, supporting overall wellness and dietary goals.",
      studiesAndReferences: [
        "Comprehensive Review on Sorbitol - [ScienceDirect](https://www.sciencedirect.com)"
      ],
      breakdownUponDigestion: "Sorbitol is partially absorbed by the body and metabolized slowly, contributing to its lower caloric value compared to sugar.",
      amountsInCommonItems: "Sorbitol is commonly found in sugar-free products, providing sweetness with fewer calories and less impact on blood sugar levels.",
      comparisonWithNaturalFoods: "Unlike sugars that can spike blood glucose levels, sorbitol offers a lower-calorie, lower-glycemic alternative, making it a preferable choice for those managing caloric intake or blood sugar."
    },
    {
      id: 15,
      name: "Sorbitol Syrup",
      type: "Sugar Alcohol",
      overview: {
        generalInfo: "Sorbitol syrup is a liquid form of the sugar alcohol sorbitol, derived from glucose. It offers a sweet taste and is used as a sweetener and humectant in various food, pharmaceutical, and cosmetic products.",
        history: "Like its powdered counterpart, sorbitol syrup has been used for decades as a low-calorie alternative to sugar. Its liquid form offers versatility in manufacturing processes and product formulations.",
        notablePoints: "Sorbitol syrup is particularly valued for its ability to retain moisture in products, extending shelf life and preserving freshness."
      },
      sweetnessRelativeToSugar: {
        value: 60,
        text: "Sorbitol syrup provides about 60% of the sweetness of sucrose, making it a preferable option for products requiring a mild, controlled sweetness."
      },
      generalSafety: "Recognized as safe for consumption, sorbitol syrup is well-tolerated when used within recommended guidelines. Excessive intake may lead to gastrointestinal discomfort.",
      safeDosage: {
        amount: 50,
        text: "Consumers are advised to moderate their intake of sorbitol syrup to avoid potential digestive issues, with recommendations typically suggesting a limit similar to that of sorbitol."
      },
      practicalSafeDosageExample: "Consuming products containing sorbitol syrup in moderation is key to avoiding gastrointestinal side effects while enjoying its sweetening benefits.",
      benefitsComparedToSugar: [
        "Helps reduce caloric intake compared to sugar, supporting weight management efforts.",
        "Minimizes impact on blood glucose levels, beneficial for individuals with diabetes.",
        "Less likely to contribute to tooth decay, promoting dental health."
      ],
      primaryUses: "Utilized in a wide range of products, including baked goods, candies, cough syrups, and toothpaste, for its sweetening and moisture-retaining properties.",
      approvalByGoverningBodies: [
        "EU: European Food Safety Authority (EFSA) - [EFSA](https://www.efsa.europa.eu/)",
        "USA: U.S. Food and Drug Administration (FDA) - [FDA](https://www.fda.gov/)"
      ],
      mythsVsFacts: "While concerns exist regarding the digestive effects of sorbitol syrup, it remains a safe and effective sweetener when consumed in moderation as part of a balanced diet.",
      sugarComparisons: "Opting for products sweetened with sorbitol syrup can significantly aid in managing calorie and sugar intake, contributing to healthier dietary patterns.",
      studiesAndReferences: [
        "Health Effects of Sorbitol - [PubMed](https://www.ncbi.nlm.nih.gov)"
      ],
      breakdownUponDigestion: "Sorbitol syrup is metabolized at a slower rate than sugar, providing a lower glycemic index and fewer calories, thereby having a lesser impact on blood glucose levels.",
      amountsInCommonItems: "Often used in sugar-free and low-calorie products, sorbitol syrup's application varies, contributing sweetness and texture without the full calorie content of sugar.",
      comparisonWithNaturalFoods: "Compared to natural sugars, sorbitol syrup offers a lower-calorie, lower-glycemic sweetening option, aligning with health-conscious consumption and dietary management."
    },
    {
      id: 16,
      name: "Mannitol",
      type: "Sugar Alcohol",
      overview: {
        generalInfo: "Mannitol is a type of sugar alcohol used as a sweetener and medication. Derived from mannose by reduction, it has a pleasant, sweet taste and is often used in food products as a sugar substitute, particularly for people with diabetes, due to its low glycemic index.",
        history: "Mannitol has been used in medical settings for decades due to its osmotic diuretic properties and has gained popularity in the food industry as a low-calorie sweetener.",
        notablePoints: "Besides its use as a sweetener, mannitol is utilized in pharmaceuticals to reduce high intracranial and intraocular pressures. Its low hygroscopicity makes it ideal for coating chewing gums and candies."
      },
      sweetnessRelativeToSugar: {
        value: 50,
        text: "Mannitol is approximately 50-60% as sweet as sucrose, providing a similar mouthfeel to table sugar with significantly fewer calories."
      },
      generalSafety: "The FDA and other international food safety authorities recognize mannitol as safe for consumption within the recommended daily intake levels. Excessive consumption may lead to digestive discomfort.",
      safeDosage: {
        amount: 20,
        text: "While mannitol is safe, consumers should be mindful of its laxative effect when consumed in large amounts. The recommended daily intake should not exceed 20g to prevent gastrointestinal issues."
      },
      practicalSafeDosageExample: "Moderation is key in consuming mannitol-containing products to avoid potential laxative effects, making it suitable for various dietary needs without compromising on sweetness.",
      benefitsComparedToSugar: [
        "Supports weight management by providing a low-calorie alternative to sugar.",
        "Does not contribute to dental caries, promoting better oral health.",
        "Has a minimal impact on blood glucose levels, making it suitable for diabetics."
      ],
      primaryUses: "Mannitol is widely used in sugar-free chewing gums, candies, and as a medication excipient. Its ability to absorb less moisture makes it ideal for products requiring a dry and stable environment.",
      approvalByGoverningBodies: [
        "EU: European Food Safety Authority (EFSA) - [EFSA](https://www.efsa.europa.eu/)",
        "USA: U.S. Food and Drug Administration (FDA) - [FDA](https://www.fda.gov/)"
      ],
      mythsVsFacts: "While some claim that sugar alcohols like mannitol can have negative health impacts, scientific evidence supports their safety in moderate consumption as part of a balanced diet.",
      sugarComparisons: "Choosing mannitol over sugar can help reduce caloric intake and manage blood sugar levels, contributing to a healthier lifestyle and dietary habits.",
      studiesAndReferences: [
        "Comprehensive Review on Mannitol - [PubMed](https://www.ncbi.nlm.nih.gov)"
      ],
      breakdownUponDigestion: "Mannitol is poorly absorbed by the body, which contributes to its low glycemic index and caloric content, making it a suitable sweetener for those managing calorie and sugar intake.",
      amountsInCommonItems: "Utilized for its non-cariogenic and low-calorie properties, mannitol is found in a variety of sugar-free and low-calorie foods and beverages.",
      comparisonWithNaturalFoods: "As a sugar substitute, mannitol offers advantages like lower caloric content and reduced impact on blood sugar levels, aligning with dietary goals focused on health and wellness."
    },
    {
      id: 17,
      name: "Isomalt",
      type: "Sugar Alcohol",
      overview: {
        generalInfo: "Isomalt is a sugar substitute made from beet sugar, offering a similar sweetness profile to sugar but with half the calories. It's particularly favored in the production of hard candies and sugar-free baked goods due to its high stability and resistance to humidity.",
        history: "Developed in the 1960s, Isomalt has been widely used in the food industry for its low glycemic index, making it suitable for diabetic diets and those looking to manage sugar intake.",
        notablePoints: "Isomalt's minimal impact on blood sugar levels and low hygroscopic nature makes it an ideal ingredient for creating elaborate sugar-free confections and preserving the texture of baked products."
      },
      sweetnessRelativeToSugar: {
        value: 50,
        text: "Isomalt is about 50% as sweet as sugar, which allows it to be used in a 1:1 ratio for sugar in recipes, with adjustments made for sweetness preference."
      },
      generalSafety: "The FDA and European Food Safety Authority (EFSA) recognize Isomalt as safe for general food use. Like other sugar alcohols, excessive consumption can lead to digestive issues.",
      safeDosage: {
        amount: 30,
        text: "Consumption of Isomalt should be moderated to avoid gastrointestinal discomfort. A daily intake of up to 30 grams is considered safe for most adults."
      },
      practicalSafeDosageExample: "Staying within the safe consumption guidelines allows individuals to enjoy the benefits of Isomalt-sweetened products without the risk of digestive distress.",
      benefitsComparedToSugar: [
        "Lower calorie content helps in managing overall caloric intake.",
        "Does not raise blood glucose or insulin levels significantly, suitable for those managing diabetes.",
        "Non-cariogenic, does not contribute to tooth decay."
      ],
      primaryUses: "Isomalt is extensively used in sugar-free candy, chewing gum, and for decorative purposes in pastry and cake decorating due to its clear melt and minimal color development upon heating.",
      approvalByGoverningBodies: [
        "EU: European Food Safety Authority (EFSA) - [EFSA](https://www.efsa.europa.eu/)",
        "USA: U.S. Food and Drug Administration (FDA) - [FDA](https://www.fda.gov/)"
      ],
      mythsVsFacts: "Despite misconceptions, Isomalt is a safe and effective sugar substitute when consumed within recommended limits, offering a health-conscious alternative for sweetening foods and beverages.",
      sugarComparisons: "Replacing sugar with Isomalt in foods can significantly reduce their caloric content and glycemic response, supporting dietary goals for weight management and blood sugar control.",
      studiesAndReferences: [
        "Safety and Health Benefits of Isomalt - [ScienceDirect](https://www.sciencedirect.com)"
      ],
      breakdownUponDigestion: "Isomalt is partially absorbed in the small intestine and largely fermented in the colon, which explains its lower caloric value and reduced effect on blood glucose levels.",
      amountsInCommonItems: "Found primarily in sugar-free confections, Isomalt contributes to the sweetness and texture of products without the full caloric impact of conventional sugars.",
      comparisonWithNaturalFoods: "Utilizing Isomalt as a sweetening agent offers a lower-calorie, lower-glycemic alternative to natural sugars, beneficial for maintaining healthful dietary practices."
    },
    {
      id: 18,
      name: "Maltitol",
      type: "Sugar Alcohol",
      overview: {
        generalInfo: "Maltitol is a sugar alcohol (polyol) used as a sugar substitute, derived mainly from starch. It has 75-90% of the sweetness of sucrose (table sugar) and nearly identical properties, making it popular in sugar-free and low-calorie products.",
        history: "Introduced in the 1960s, Maltitol has been widely utilized in the food industry for its sugar-like characteristics, providing a sweet taste without the same glycemic impact as sugar, suitable for diabetic and low-carb diets.",
        notablePoints: "Maltitol's low glycemic index makes it an appealing choice for people managing blood sugar levels. It also has fewer calories than sugar, contributing to its use in weight management products."
      },
      sweetnessRelativeToSugar: {
        value: 90,
        text: "Maltitol is about 90% as sweet as sugar, which makes it one of the closer alternatives to sugar in terms of taste and texture."
      },
      generalSafety: "Recognized as safe by food safety authorities worldwide, Maltitol's consumption is generally well tolerated. However, like other polyols, it can lead to digestive discomfort if consumed in large quantities.",
      safeDosage: {
        amount: 30,
        text: "A daily intake of up to 30 grams is considered safe for most people, beyond which it may cause laxative effects."
      },
      practicalSafeDosageExample: "Moderate consumption of Maltitol-containing products allows for enjoyment of sweet foods with minimal risk of gastrointestinal upset.",
      benefitsComparedToSugar: [
        "Contributes to a reduced calorie intake, aiding in weight management.",
        "Low impact on blood glucose levels, suitable for people with diabetes.",
        "Does not contribute to tooth decay, promoting better dental health."
      ],
      primaryUses: "Widely used in sugar-free chocolates, candies, and baked goods, as well as in sugar-free gum, due to its sweetening capabilities and physical properties similar to sucrose.",
      approvalByGoverningBodies: [
        "EU: European Food Safety Authority (EFSA) - [EFSA](https://www.efsa.europa.eu/)",
        "USA: U.S. Food and Drug Administration (FDA) - [FDA](https://www.fda.gov/)"
      ],
      mythsVsFacts: "Despite concerns about digestive issues, when consumed within moderation, Maltitol is a safe and effective sugar substitute for most individuals, offering a lower-calorie alternative without spiking blood sugar levels.",
      sugarComparisons: "Replacing sugar with Maltitol can significantly lower the caloric content and glycemic index of foods, supporting healthful eating habits and dietary management of diabetes.",
      studiesAndReferences: [
        "Comprehensive Review on Maltitol - [PubMed](https://pubmed.ncbi.nlm.nih.gov/)"
      ],
      breakdownUponDigestion: "Maltitol is partially absorbed by the body, with the remainder being fermented in the colon. This partial absorption is responsible for its reduced caloric contribution compared to sugar.",
      amountsInCommonItems: "Maltitol is found in various sugar-free and reduced-calorie products, providing sweetness and bulk similar to that of sugar but with fewer calories and less impact on blood sugar.",
      comparisonWithNaturalFoods: "As a sugar alcohol, Maltitol offers a compromise between the sweetness of natural sugars and the need to reduce caloric intake and manage blood glucose levels."
    },
    {
      id: 19,
      name: "Maltitol Syrup",
      type: "Sugar Alcohol",
      overview: {
        generalInfo: "Maltitol syrup is a sweet, sugar-free syrup derived from hydrogenated maltose. It's used as a sugar substitute in various food products, offering a similar sweetness and texture to sugar with fewer calories and a lower glycemic index.",
        history: "Like maltitol, maltitol syrup has been utilized in the food industry for decades as a healthier alternative to high-calorie, high-sugar syrups, particularly in products aimed at diabetic and health-conscious consumers.",
        notablePoints: "This syrup is especially favored in the production of sweets, baked goods, and other products where moisture retention is important. It provides a sweet taste without the spike in blood glucose levels associated with sugar."
      },
      sweetnessRelativeToSugar: {
        value: 75,
        text: "Maltitol syrup is approximately 75% as sweet as sugar, making it an effective sweetener for a wide range of applications."
      },
      generalSafety: "Widely recognized as safe for consumption, maltitol syrup is nevertheless capable of causing digestive discomfort if consumed in excess due to its sugar alcohol content.",
      safeDosage: {
        amount: 25,
        text: "A daily intake of up to 25 grams is advised to minimize the risk of gastrointestinal issues, such as bloating or laxative effects."
      },
      practicalSafeDosageExample: "Incorporating maltitol syrup into one's diet allows for the enjoyment of sweetened products without exceeding recommended sugar intake levels.",
      benefitsComparedToSugar: [
        "Reduces calorie intake while maintaining sweetness, aiding in weight management.",
        "Minimally impacts blood glucose levels, making it suitable for those with diabetes.",
        "Less likely to contribute to tooth decay, promoting oral health."
      ],
      primaryUses: "Commonly used in sugar-free confectioneries, baked goods, and as a general-purpose syrup in various diet products.",
      approvalByGoverningBodies: [
        "EU: European Food Safety Authority (EFSA) - [EFSA](https://www.efsa.europa.eu/)",
        "USA: U.S. Food and Drug Administration (FDA) - [FDA](https://www.fda.gov/)"
      ],
      mythsVsFacts: "While concerns about gastrointestinal discomfort exist, maltitol syrup, when consumed within the recommended limits, offers a viable alternative to sugar for most individuals.",
      sugarComparisons: "Using maltitol syrup as a substitute for sugar in recipes can significantly lower the caloric content and glycemic response of foods and beverages.",
      studiesAndReferences: [
        "Health Effects of Maltitol Syrup - [PubMed](https://pubmed.ncbi.nlm.nih.gov/)"
      ],
      breakdownUponDigestion: "Maltitol syrup is partially absorbed in the intestine, with the remainder being fermented by bacteria in the colon, contributing fewer calories than sugar.",
      amountsInCommonItems: "Predominantly found in 'sugar-free' or 'no sugar added' products, maltitol syrup provides a sweetness that closely mimics that of conventional syrups.",
      comparisonWithNaturalFoods: "Unlike natural sweet syrups that can significantly increase caloric and sugar intake, maltitol syrup offers a lower-calorie, lower-glycemic alternative."
    },
    {
      id: 20,
      name: "Lactitol",
      type: "Sugar Alcohol",
      overview: {
        generalInfo: "Lactitol is a sugar alcohol derived from lactose, offering a sweetness approximately 40% that of sugar. It's used as a sugar substitute primarily in sugar-free and reduced-calorie foods, including baked goods, chocolates, and ice cream.",
        history: "Introduced in the food industry as a low-calorie sweetener, lactitol has been utilized for its ability to provide sweetness with fewer calories, making it especially popular in products targeted at diabetic and health-conscious consumers.",
        notablePoints: "Lactitol is valued for its minimal impact on blood glucose and insulin levels, as well as its laxative properties, which can aid in digestive health when consumed in moderation."
      },
      sweetnessRelativeToSugar: {
        value: 40,
        text: "With about 40% of the sweetness of sucrose, lactitol is a versatile ingredient that can be used to reduce the sugar content in a wide variety of products."
      },
      generalSafety: "Recognized as safe for consumption, lactitol is nonetheless recommended to be consumed within moderation to avoid potential digestive discomfort, as is common with many sugar alcohols.",
      safeDosage: {
        amount: 30,
        text: "An intake of up to 30 grams per day is generally considered safe, with minimal risk of gastrointestinal side effects for most individuals."
      },
      practicalSafeDosageExample: "Using lactitol in place of sugar allows for enjoyment of sweet flavors in various products, without significantly adding to daily caloric intake or impacting blood sugar levels.",
      benefitsComparedToSugar: [
        "Contributes significantly less to caloric intake, aiding in weight management.",
        "Does not raise blood glucose levels, suitable for individuals with diabetes.",
        "Has a lower risk of contributing to dental caries."
      ],
      primaryUses: "Lactitol is widely used in the manufacture of low-calorie, sugar-free, and diabetic-friendly food products such as chocolates, baked goods, and ice cream.",
      approvalByGoverningBodies: [
        "EU: European Food Safety Authority (EFSA) - [EFSA](https://www.efsa.europa.eu/)",
        "USA: U.S. Food and Drug Administration (FDA) - [FDA](https://www.fda.gov/)"
      ],
      mythsVsFacts: "Despite misconceptions, lactitol is a safe and effective sugar substitute when used responsibly within the dietary guidelines.",
      sugarComparisons: "Substituting lactitol for sugar in recipes can help reduce the overall calorie and sugar content, contributing to a healthier diet without sacrificing taste.",
      studiesAndReferences: [
        "Comprehensive Review on Lactitol - [PubMed](https://pubmed.ncbi.nlm.nih.gov/)"
      ],
      breakdownUponDigestion: "Lactitol is poorly absorbed in the intestine, resulting in a lower caloric value than sugar and minimal impact on blood glucose levels.",
      amountsInCommonItems: "Lactitol is often used in 'no sugar added' or 'sugar-free' products, providing a sweet taste without the full calorie content of traditional sugars.",
      comparisonWithNaturalFoods: "Unlike sucrose and other natural sugars, lactitol offers a low-calorie, low-glycemic alternative for sweetening, making it a beneficial choice for health-conscious consumers."
    },
    {
      id: 21,
      name: "Xylitol",
      type: "Sugar Alcohol",
      overview: {
        generalInfo: "Xylitol is a sugar alcohol with a sweetness comparable to that of sugar but with 40% fewer calories. It's naturally found in small amounts in fruits and vegetables and is commonly used as a sugar substitute in sugar-free chewing gums, mints, and oral care products.",
        history: "Xylitol was first discovered in the late 19th century and has been used as a sweetener since the 1960s. Its popularity increased due to its dental benefits and low glycemic index, making it suitable for people with diabetes.",
        notablePoints: "One of the most significant benefits of xylitol is its ability to reduce the risk of tooth decay by inhibiting the growth of the bacteria Streptococcus mutans, which is responsible for plaque."
      },
      sweetnessRelativeToSugar: {
        value: 100,
        text: "Xylitol's sweetness is equal to that of sucrose, making it an ideal one-to-one substitute in recipes and products aiming for a sugar-like sweetness profile."
      },
      generalSafety: "Xylitol is considered safe for human consumption, but it can cause digestive discomfort if consumed in large amounts due to its laxative effect.",
      safeDosage: {
        amount: 50,
        text: "A daily intake of up to 50 grams is generally well tolerated by most people, though sensitivity varies and lower amounts are recommended for individuals new to consuming xylitol."
      },
      practicalSafeDosageExample: "For a person weighing 70kg, this safe intake level allows for the consumption of numerous xylitol-sweetened products throughout the day without adverse effects.",
      benefitsComparedToSugar: [
        "Promotes dental health by reducing cavities and reversing the progression of early cavities.",
        "Has a lower glycemic index than sugar, making it a safer choice for diabetics.",
        "Contributes fewer calories to the diet, aiding in weight management."
      ],
      primaryUses: "Xylitol is widely used in dental care products such as toothpaste and mouthwash, as well as in chewing gum, candies, and as a tabletop sweetener.",
      approvalByGoverningBodies: [
        "EU: European Food Safety Authority (EFSA) - [EFSA](https://www.efsa.europa.eu/)",
        "USA: U.S. Food and Drug Administration (FDA) - [FDA](https://www.fda.gov/)"
      ],
      mythsVsFacts: "While xylitol is toxic to dogs, causing severe health issues, it is safe for human consumption when used as recommended.",
      sugarComparisons: "Using xylitol as a substitute for sugar can help reduce caloric intake and lower the risk of dental caries, without sacrificing taste.",
      studiesAndReferences: [
        "Impact of Xylitol on Dental Health - [PubMed](https://pubmed.ncbi.nlm.nih.gov/)"
      ],
      breakdownUponDigestion: "Unlike sugar, xylitol is not fully absorbed by the body, resulting in a lower caloric contribution and minimal impact on blood sugar levels.",
      amountsInCommonItems: "Xylitol is commonly found in sugar-free chewing gums and mints, where it provides a sweet taste and dental health benefits.",
      comparisonWithNaturalFoods: "Compared to foods naturally high in sugars, xylitol offers a healthful alternative that supports dental health and can fit into a low-calorie, low-sugar diet."
    },
    {
      id: 22,
      name: "Erythritol",
      type: "Sugar Alcohol",
      overview: {
        generalInfo: "Erythritol is a sugar alcohol that occurs naturally in fruits and fermented foods. It's 70% as sweet as sucrose but has almost no calories, making it a popular sweetener in low-calorie and ketogenic diets.",
        history: "Erythritol has been part of the human diet for thousands of years due to its presence in fruits and other foods, but it was only commercially produced and used as a sweetener in the late 20th century.",
        notablePoints: "Erythritol is well-tolerated by the digestive system and does not cause the laxative effects often associated with other sugar alcohols. It also has a high digestive tolerance and does not raise blood glucose or insulin levels."
      },
      sweetnessRelativeToSugar: {
        value: 70,
        text: "Erythritol is about 70% as sweet as sugar, which allows it to be used in a variety of products looking to reduce sugar content without compromising on sweetness."
      },
      generalSafety: "Erythritol is generally recognized as safe (GRAS) by health authorities and has been extensively studied for its effects on metabolism and dental health.",
      safeDosage: {
        amount: "Not specified",
        text: "Erythritol's high digestive tolerance means that it does not have a specified upper limit for daily consumption, but moderation is advised."
      },
      practicalSafeDosageExample: "Due to its low caloric value and minimal impact on blood sugar, erythritol can be consumed in reasonable amounts without concerns over exceeding daily sugar or calorie limits.",
      benefitsComparedToSugar: [
        "Contributes virtually no calories, aiding in weight management.",
        "Does not affect blood sugar or insulin levels, making it diabetic-friendly.",
        "Does not promote tooth decay and may help prevent dental plaque and cavities."
      ],
      primaryUses: "Erythritol is used in a wide range of food products, including sugar-free and low-calorie beverages, baked goods, and as a table-top sweetener.",
      approvalByGoverningBodies: [
        "EU: European Food Safety Authority (EFSA) - [EFSA](https://www.efsa.europa.eu/)",
        "USA: U.S. Food and Drug Administration (FDA) - [FDA](https://www.fda.gov/)"
      ],
      mythsVsFacts: "Despite misconceptions, erythritol does not have the same digestive side effects as other sugar alcohols, making it a comfortable choice for those sensitive to gastrointestinal issues.",
      sugarComparisons: "Erythritol allows for the sweetening of foods and beverages without the added calories or metabolic disturbances associated with sugar, supporting healthier dietary choices.",
      studiesAndReferences: [
        "Erythritol's Impact on Health and Metabolism - [PubMed](https://pubmed.ncbi.nlm.nih.gov/)"
      ],
      breakdownUponDigestion: "Most erythritol consumed is absorbed into the bloodstream and excreted unchanged in urine, with minimal fermentation by gut bacteria.",
      amountsInCommonItems: "Erythritol is commonly found in low-calorie and sugar-free products, often combined with other sweeteners to enhance its sweetness.",
      comparisonWithNaturalFoods: "While natural sugars from fruits contribute to overall calorie intake, erythritol offers a negligible calorie alternative, making it a suitable sweetener for a broad range of dietary needs."
    }
    
]


// lib/queries.js
export const interiorPaintingQuery = `*[_type == "interiorPaintingPage"][0]{
    title,
    introParagraph,
    pairs[]{
      beforeImage{
        asset->{
          url
        }
      },
      beforeText,
      afterImage{
        asset->{
          url
        }
      },
      afterText
    },
    cabinetStainingSection {
      title,
      description,
      image{
        asset->{
          url
        }
      }
    }
  }`;

export const homePageQuery = `*[_type == "homePage"][0]{
    heroTitle,
    heroDescription,
    heroButtonText,
    heroButtonLink,
  
    services[]{
      title,
      description,
      link,
      "imageUrl": image.asset->url
    },
  
    aboutTitle,
    aboutDescription,
    aboutQuote,
  
    contactTitle,
    contactDescription,
  
    workDirectlyTitle,
    workDirectlyDescription,
  
    servingTitle,
    servingDescription,
    servingButtonText,
    servingButtonLink,
  
    propertyManagersTitle,
    propertyManagersDescription
  }`;
export const aboutPageQuery = `*[_type == "aboutPage"][0]{
    title,
    sections[]{
      altText,
      description,
      "imageUrl": image.asset->url
    }
  }`;
export const fineArtsQuery = `*[_type == "fineArts"][0]{
    title,
    introParagraph
  }`;
export const exteriorPaintingQuery = `*[_type == "exteriorPaintingPage"][0]{
    title,
    introParagraph,
    secondParagraph,
    thirdParagraph
  }`;

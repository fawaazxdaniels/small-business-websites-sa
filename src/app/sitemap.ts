import { MetadataRoute } from 'next'; import { siteConfig } from '@/config/site'; export default function sitemap(): MetadataRoute.Sitemap{return ['','websites','how-it-works','examples','contact'].map(path=>({url:`${siteConfig.siteUrl}/${path}`,lastModified:new Date()}))}


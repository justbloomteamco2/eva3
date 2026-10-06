import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { images } from '../data/images';
export function Seo({title,description}){document.title=title;const m=document.querySelector('meta[name="description"]');if(m)m.content=description;return null}
export function Button({to,children,variant='primary',className='',...props}){const cn=`btn btn-${variant} ${className}`;return to?<Link to={to} className={cn} {...props}>{children}</Link>:<button className={cn} {...props}>{children}</button>}
export function SectionHeading({eyebrow,title,text,centered=false}){return <div className={`section-heading ${centered?'text-center mx-auto':''}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text&&<p>{text}</p>}</div>}
export function Image({src,alt,className=''}){return <img src={src} alt={alt} className={className} onError={e=>{e.currentTarget.src=images.fallback}}/>}
export function ServiceCard({service}){const Icon=Icons[service.icon]||Icons.ShieldCheck;return <Link to={`/services/${service.id}`} className="service-card"><span className="icon-box"><Icon/></span><h3>{service.title}</h3><p>{service.description}</p><span className="card-link">Explore service <Icons.ArrowUpRight size={16}/></span></Link>}
export function IndustryCard({item}){return <article className="industry-card"><Image src={item.image} alt={`${item.title} environment`}/><div><h3>{item.title}</h3><p>{item.description}</p></div></article>}
export function PageHero({eyebrow='SecureForce',title,text,image=images.corporate}){return <section className="page-hero" style={{backgroundImage:`linear-gradient(90deg, rgba(2,12,27,.94), rgba(2,12,27,.52)), url(${image})`}}><div className="container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{text}</p></div></section>}
export function CTA(){return <section className="cta" style={{backgroundImage:`url(${images.corporate})`}}><div><p className="eyebrow">Let’s discuss your requirements</p><h2>NEED RELIABLE<br/>SECURITY PERSONNEL?</h2><p>Tell us what you need. We’ll help you plan the right solution.</p></div><Button to="/request-quote">Request a Quote <Icons.ArrowRight size={18}/></Button></section>}
export function Breadcrumbs({label}){return <nav className="breadcrumbs" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><span>{label}</span></nav>}

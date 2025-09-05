"use client";
import type React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/ranazain5801/?utm_source=ig_web_button_share_sheet",
      color: "hover:text-pink-600",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/+923087575476",
      color: "hover:text-green-600",
    },
  ];
  const quickLinks = [
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns", href: "/return" },
    { name: "FAQ", href: "/faq" },
    { name: "Review", href: "/review" },
     { name: "Contact us", href: "/contact" },
    { name: "About Us", href: "/about" },
     { name: "Sizing", href: "/size" },
  ];
  const categories = [
    { name: "Women's Fashion" },
    { name: "Girls Fashion" },
    { name: "Sale Items" },
  ];
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    if (email) {
      // Create WhatsApp message for admin notification
      const whatsappMessage = `New Newsletter Subscription from Footer:
      
Email: ${email}
Date: ${new Date().toLocaleDateString()}
Time: ${new Date().toLocaleTimeString()}`;

      const whatsappUrl = `https://wa.me/+923087575476?text=${encodeURIComponent(
        whatsappMessage
      )}`;
      window.open(whatsappUrl, "_blank");

      alert("Thank you for subscribing to our newsletter!");
      e.currentTarget.reset();
    }
  };

  return (
    <footer className="bg-gradient-to-r from-indigo-950 via-purple-900 to-violet-800
 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-14 h-14 bg-gradient-to-br rounded-lg flex items-center justify-center">
                <Image
                  src="zn.png"
                  alt="Logo"
                  width={200}
                  height={200}
                />
              </div>
              <div>
                 
              <p className="text-md text-white">jewellers</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted destination for timeless jewellery. Discover elegant pieces that add sparkle to every occasion with unmatched quality and style
            </p>
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+923087575476</span>
              </div>
              {/* <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                <span>ascentgarments92@gmail.com</span>
              </div> */}
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Sargodha</span>
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Categories */}
          <div className="space-y-2">
            <h4 className="font-semibold text-lg">Categories</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Newsletter & Social */}
          <div className="space-y-2">
            <h4 className="font-semibold text-lg">Stay Connected</h4>
            <p className="text-gray-300 text-sm">
              Subscribe to get updates on new arrivals and exclusive offers.
            </p>
            {/* Newsletter Signup */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                required
              />
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700"
              >
                Subscribe
              </Button>
            </form>
            {/* Social Media Links */}
            <div className="space-y-3">
              <h5 className="font-medium text-sm">Follow Us</h5>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 bg-gray-800 rounded-lg transition-colors ${social.color} hover:bg-gray-700`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator className="bg-gray-800" />
      {/* Bottom Footer */}
      <div className="container mx-auto px-1 md:px-4 py-2">
        <div className="flex flex-col md:flex-row justify-between items-center md:space-y-2 space-y-0">
          <div className="text-sm gap-2 hidden md:flex text-gray-400">
            ©{currentYear} Zain jeweller All rights reserved.
          </div>
          <div className="hidden md:flex flex-wrap gap-6 text-sm">
            <Link
              href=""
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href=""
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            {/* <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
              Sitemap
            </Link> */}
          </div>
          <div className="flex justify-between md:justify-normal items-center space-x-1 md:space-x-4">
            <span className="text-sm text-gray-400 p-4">Powered by</span>
            <div className="flex gap-2">
            <div className="w-14 h-14 bg-gradient-to-br rounded-lg flex items-center justify-center">
              <Image
                src="/zn.png"
                alt="Logo"
                width={300}
                height={300}
              />
            </div>
            <div className="flex justify-center items-center">
                        <span className="text-sm text-white p-4 ">jewellers</span>

            </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

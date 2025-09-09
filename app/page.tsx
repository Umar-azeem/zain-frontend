  "use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Star,
  Truck,
  Shield,
  Headphones,
  ChevronLeft,
  ChevronRight,
  Play,
  Award,
  Users,
  TrendingUp,
  Heart,
} from "lucide-react"
import apiRequest from "./utils/api"


const heroSlides = [
  {
    id: 1,
     title: "Summer Collection 2024",
     subtitle: "Discover the Latest Trends",
     description:
       "Embrace the season with our vibrant summer collection featuring breathable fabrics and stunning designs",
    image: "/sl1.png",
    buttonText: "Shop Summer",
    buttonLink: "/products?category=summer",
    gradient: "from-orange-400 via-pink-500 to-purple-600",
  },
  {
    id: 2,
    // title: "Premium Denim",
    // subtitle: "Crafted for Comfort",
    // description: "Experience unmatched quality with our premium denim collection, designed for the modern lifestyle",
    image: "/sl2.png",
    buttonText: "Explore Denim",
    buttonLink: "/products?category=denim",
    gradient: "from-blue-600 via-indigo-600 to-purple-700",
  },
  {
    id: 3,
    // title: "Kids Fashion",
    // subtitle: "Fun Meets Style",
    // description: "Adorable and comfortable clothing that lets kids be kids while looking absolutely fantastic",
    image: "/sl3.png",
    buttonText: "Shop Girls",
    buttonLink: "/products?category=Girls",
    gradient: "from-green-400 via-blue-500 to-purple-600",
  },
  {
    id: 4,
    // title: "Exclusive Sale",
    // subtitle: "Up to 70% Off",
    // description: "Don't miss out on our biggest sale of the year with incredible discounts on premium fashion",
    image: "/sl4.png",
    buttonText: "Shop Sale",
    buttonLink: "/products?sale=true",
    gradient: "from-red-500 via-pink-500 to-orange-500",
  },
]
const categories = [

  {
    name: "Women",
    description: "Classic & Modern",
    image: "/assets/1.webp",
    href: "/products?category=men",
    color: "from-blue-500 to-indigo-500",
    items: "1,800+ Items",
  },
  {
    name: "Girls",
    description: "Fun & Comfortable",
     image: "/assets/wr.png",
    href: "/products?category=Girls",
    color: "from-green-500 to-emerald-500",
    items: "1,200+ Items",
  },
]


export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [womenProducts, setWomenProducts] = useState<any[]>([])
  const [girlsProducts, setGirlsProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)


  // Fetch products and filter by gender
 useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await apiRequest("/api/products");
        // const data = await res.json();

        console.log(data);
        if (Array.isArray(data)) {
          setWomenProducts(
            data.filter((p: any) => p.gender?.toLowerCase() === "women")
          );
          setGirlsProducts(
            data.filter((p: any) => p.gender?.toLowerCase() === "girls")
          );
        } else {
          console.error("API did not return an array:", data);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  const renderProductCard = (product: any) => (
   <Card
      key={product._id}
      className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white"
    >
      <Link href={`/products/${product._id}`}>
        {/* Image Section */}
        <div className="relative h-72 overflow-hidden">
          <Image
            src={product.images?.[0] || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:opacity-0 transition duration-500"
          />
          {/* Hover second image */}
          {product.images?.[1] && (
            <Image
              src={product.images[1]}
              alt={product.name}
              fill
              className="object-cover opacity-0 group-hover:opacity-100 transition duration-500"
            />
          )}

          {/* Discount Badge */}
          {product.discount && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-red-600 text-white font-semibold shadow-md">
                -{product.discount}%
              </Badge>
            </div>
          )}

          {/* Category Badge + Wishlist */}
          <div className="absolute top-3 right-3 flex items-center gap-2">
            <Badge className="bg-white/90 text-gray-900 capitalize shadow-sm">
              {product.category}
            </Badge>
            <button className="p-1 rounded-full bg-white/90 hover:bg-red-500 hover:text-white transition shadow-sm">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Details Section */}
        <CardContent className=" p-2 md:p-5 space-y-3">
          {/* Product Title */}
          <h3 className="font-semibold text-md md:text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>

          {/* Ratings */}
          {product.rating && (
            <div className="flex items-center md:space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400 drop-shadow-sm"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-gray-500">
                ({product.reviews || 0})
              </span>
            </div>
          )}

          {/* Price Section */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price}
            </span>
            {product.oldPrice && (
              <span className="text-sm line-through text-gray-400">
                ${product.oldPrice}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <div className="overflow-hidden">
            <button className="w-full mt-3 py-2 rounded-lg bg-blue-600 text-white font-medium opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all duration-300 shadow-md">
              Add to Cart
            </button>
          </div>
        </CardContent>
      </Link>
    </Card>
  )


  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-90`} />
              <Image
                src={slide.image || "/placeholder.svg"}
                alt='slide image'
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
        </div>
        {/* Slide Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <div className="space-y-6 animate-fade-in">
                {/* <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  {heroSlides[currentSlide]}
                </Badge> */}
                {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  {heroSlides[currentSlide].title}
                </h1> */}
                {/* <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  {heroSlides[currentSlide].description}
                </p> */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" className="text-lg px-8 py-4 bg-white text-gray-900 hover:bg-gray-100">
                    <Link href={heroSlides[currentSlide].buttonLink}>
                      {heroSlides[currentSlide].buttonText}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                    asChild
                  >
                    <Link href="/products">
                      <Play className="mr-2 h-5 w-5" />
                      Watch Collection
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Shop by Category</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our carefully curated collections designed for every style, occasion, and personality
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
  {categories.map((category) => (
    <Link key={category.name} href={category.href}>
      <Card className="group overflow-hidden rounded-3xl hover:shadow-xl hover:shadow-pink-200 transition-all duration-500 transform hover:-translate-y-2">
        <div className="relative h-72 overflow-hidden">
          <Image
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 rounded-3xl"
          />

          {/* Cute gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t  group-hover:opacity-90 transition-all duration-500"
          ></div>

          {/* Cute content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <div className="bg-white/70 backdrop-blur-md px-4 py-2 rounded-full text-sm text-gray-800 font-medium shadow-md mb-3 group-hover:bg-white/60 transition">
              {category.items} items
            </div>
            <h3 className="text-2xl font-bold text-white drop-shadow-md group-hover:scale-110 transition-transform duration-300">
              {category.name}
            </h3>
            <p className="text-base text-white/90 mt-2 group-hover:text-white">
              {category.description}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  ))}
</div>

        </div>
      </section>

      {/* Men Products */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Women Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked favorites from our latest collection, loved by thousands of customers worldwide
            </p>
          </div>
          <section className="py-4 bg-white">
            <div className="container mx-auto px-4">
              {loading ? (
                <div className="flex items-center justify-center gap-2 text-gray-600 py-12">
                  <svg
                    className="animate-spin h-6 w-6 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  <span>Loading men products...</span>
                </div>
              ) : womenProducts.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {womenProducts.map(renderProductCard)}
                </div>
              ) : (
                <p className="text-center text-gray-600 py-12">No Women products found.</p>
              )}
            </div>
          </section>


          <div className="text-center mt-12">
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* kids Products */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Girls Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked favorites from our latest collection, loved by thousands of customers worldwide
            </p>
          </div>

          <section className="py-4 bg-white">
            <div className="container mx-auto px-4">
              {loading ? (
                <div className="flex items-center justify-center gap-2 text-gray-600 py-12">
                  <svg
                    className="animate-spin h-6 w-6 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  <span>Loading kids products...</span>
                </div>
              ) : girlsProducts.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {girlsProducts.map(renderProductCard)}
                </div>
              ) : (
                <p className="text-center text-gray-600 py-12">No Girls products found.</p>
              )}
            </div>
          </section>


          <div className="text-center mt-12">
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Stats Section */}
    <section className="py-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Happy Customers */}
          <div className="text-center p-3 md:p-6 bg-white/10 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <div className="w-10 h-10  md:w-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-5 h-5 md:h-8 md:w-8 text-yellow-300" />
            </div>
            <div className=" text-md md:text-4xl  font-extrabold">50K+</div>
            <div className="text-white/80">Happy Customers</div>
          </div>

          {/* Products */}
          <div className="text-center p-3 md:p-6 bg-white/10 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <div className="w-10 h-10  md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-5 h-5 md:h-8 md:w-8 text-green-300" />
            </div>
            <div className="text-md md:text-4xl font-extrabold">5K+</div>
            <div className="text-white/80">Products</div>
          </div>

          {/* Rating */}
          <div className="text-center p-3  md:p-6 bg-white/10 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <div className="w-10 h-10  md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-5 h-5 md:h-8 md:w-8 text-pink-300" />
            </div>
            <div className="text-md md:text-4xl font-extrabold">4.9</div>
            <div className="text-white/80">Rating</div>
          </div>

          {/* Fast Delivery */}
          <div className="text-center p-3  md:p-6 bg-white/10 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <div className="w-10 h-10  md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-5 h-5 md:h-8 md:w-8 text-blue-300" />
            </div>
            <div className="text-md md:text-4xl font-extrabold">24H</div>
            <div className="text-white/80 ">Fast Delivery</div>
          </div>

        </div>
      </div>
    </section>
      {/* Features Section */}
      <section className="py-6 bg-gradient-to-r from-teal-50 to-orange-50">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      
      {/* Fast Shipping */}
      <div className="text-center p-4 rounded-xl shadow-sm bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white hover:shadow-md transition">
        <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <Truck className="h-7 w-7 text-teal-600" />
        </div>
        <h3 className="text-lg font-bold text-white">Fast Shipping</h3>
        <p className="text-white text-sm">Get your orders within 2–4 days</p>
      </div>

      {/* Secure Checkout */}
      <div className="text-center p-4 rounded-xl shadow-sm bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:shadow-md transition">
        <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <Shield className="h-7 w-7 text-orange-600" />
        </div>
        <h3 className="text-lg font-bold text-white">Secure Checkout</h3>
        <p className="text-white text-sm">Safe payments powered by SSL</p>
      </div>

      {/* Friendly Support */}
      <div className="text-center p-4 rounded-xl shadow-sm bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:shadow-md transition">
        <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <Headphones className="h-7 w-7 text-pink-600" />
        </div>
        <h3 className="text-lg font-bold text-white">Friendly Support</h3>
        <p className="text-white text-sm">We’re here 24/7 to help you</p>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

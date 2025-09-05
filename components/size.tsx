import React from "react";

function Size() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Jewellery Size Guide
      </h2>
      <p className="text-center mb-8">
        Finding the perfect jewellery fit is important for both comfort and
        style. Use the size charts and measuring guide below to ensure your
        rings, bracelets, and necklaces fit just right.
      </p>

      {/* Ring Sizes */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3">Ring Size Chart</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="border px-4 py-2">US Size</th>
                <th className="border px-4 py-2">UK Size</th>
                <th className="border px-4 py-2">EU Size</th>
                <th className="border px-4 py-2">Circumference (mm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">5</td>
                <td className="border px-4 py-2">J 1/2</td>
                <td className="border px-4 py-2">49</td>
                <td className="border px-4 py-2">49.3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">6</td>
                <td className="border px-4 py-2">L 1/2</td>
                <td className="border px-4 py-2">51</td>
                <td className="border px-4 py-2">51.8</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">7</td>
                <td className="border px-4 py-2">N 1/2</td>
                <td className="border px-4 py-2">54</td>
                <td className="border px-4 py-2">54.4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Bracelet Sizes */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3">Bracelet Size Chart</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="border px-4 py-2">Size</th>
                <th className="border px-4 py-2">
                  Wrist Circumference (inches)
                </th>
                <th className="border px-4 py-2">Bracelet Length (inches)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Small</td>
                <td className="border px-4 py-2">5.5 - 6</td>
                <td className="border px-4 py-2">6.5 - 7</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Medium</td>
                <td className="border px-4 py-2">6 - 6.5</td>
                <td className="border px-4 py-2">7 - 7.5</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Large</td>
                <td className="border px-4 py-2">6.5 - 7</td>
                <td className="border px-4 py-2">7.5 - 8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Necklace Sizes */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3">Necklace Length Guide</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="border px-4 py-2">Length (inches)</th>
                <th className="border px-4 py-2">Style</th>
                <th className="border px-4 py-2">Position on Body</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">16"</td>
                <td className="border px-4 py-2">Choker</td>
                <td className="border px-4 py-2">Tightly around neck</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">18"</td>
                <td className="border px-4 py-2">Princess</td>
                <td className="border px-4 py-2">Just below collarbone</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">20"</td>
                <td className="border px-4 py-2">Matinee</td>
                <td className="border px-4 py-2">Upper chest</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Measurement Guide */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4 text-center">
          How to Measure Your Jewellery Size
        </h3>
        <div className="space-y-6 text-sm leading-6">
          {/* Ring */}
          <div>
            <h4 className="font-semibold text-lg mb-2">
              📏 Measuring Your Ring Size
            </h4>
            <p>
              To measure your ring size with an inch tape (or a strip of paper
              and a ruler), wrap the tape around the thickest part of your
              finger, ensuring it's snug but not too tight. Mark or read where
              the tape overlaps. The measurement in millimeters is your finger's
              circumference. Then, consult the ring size chart to convert this
              circumference into a standard size (US, UK, or EU).
            </p>
            <p className="text-lg ">
              پنی انگوٹھی کے سائز کو ایک انچ ٹیپ (یا کاغذ کی ایک پٹی اور ایک
              رولر) سے ماپنے کے لیے، ٹیپ کو اپنی انگلی کے سب سے موٹے حصے کے گرد
              لپیٹیں، اس بات کو یقینی بناتے ہوئے کہ یہ چپٹا ہے لیکن زیادہ تنگ
              نہیں ہے، پھر نشان زد کریں یا پڑھیں کہ ٹیپ کہاں اوورلیپ ہوتی ہے۔
              ملی میٹر میں پیمائش آپ کی انگلی کا فریم ہے۔ اس کے بعد آپ اپنے
              علاقے (US, UK, یا EU) کے لیے اس فریم کو ایک معیاری انگوٹھی کے سائز
              میں تبدیل کرنے کے لیے انگوٹی کے سائز کے چارٹ سے مشورہ کریں۔
            </p>
          </div>

          {/* Bracelet */}
          <div>
            <h4 className="font-semibold text-lg mb-2">
              📏 Measuring Your Bracelet Size
            </h4>
            <p>
              Wrap a flexible tape measure or string around your wrist just
              above the wrist bone. Add 0.5 to 1 inch depending on how loose or
              snug you want the bracelet to fit. Compare your measurement with
              the bracelet size chart.
            </p>
            <p className="text-lg">
              کلائی کی ہڈی کے بالکل اوپر اپنی کلائی کے گرد لچکدار ٹیپ کی پیمائش
              یا تار لپیٹیں۔ 0.5 سے 1 انچ کا اضافہ کریں اس بات پر منحصر ہے کہ آپ
              بریسلٹ کو کس حد تک ڈھیلے یا ڈھیلے رکھنا چاہتے ہیں۔ اپنی پیمائش کا
              کڑا سائز کے چارٹ سے موازنہ کریں۔
            </p>
          </div>

          {/* Necklace */}
          <div>
            <h4 className="font-semibold text-lg mb-2">
              📏 Measuring Your Necklace Length
            </h4>
            <p>
              Use a measuring tape or string to measure the length from the back
              of your neck to the point on your chest where you want the
              necklace to fall. Double this measurement to get the full chain
              length, then refer to the necklace chart for the style name.
            </p>
            <p className="text-lg">
              پیچھے سے لمبائی کی پیمائش کرنے کے لیے ماپنے والی ٹیپ یا تار کا استعمال کریں۔
              آپ کی گردن سے آپ کے سینے کے اس مقام تک جہاں آپ چاہتے ہیں۔
              ہار گرنا. مکمل سلسلہ حاصل کرنے کے لیے اس پیمائش کو دوگنا کریں۔
              لمبائی، پھر سٹائل کے نام کے لیے ہار کے چارٹ کو دیکھیں۔

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Size;

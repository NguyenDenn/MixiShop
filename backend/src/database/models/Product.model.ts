import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, maxlength: 160 },
    image: { type: String, required: true, maxlength: 1000 },
    images: [{ type: String, maxlength: 1000 }],
    description: { type: String, required: true },
    category: { type: mongoose.SchemaTypes.ObjectId, ref: 'categories' },
    rating: { type: Number, default: 0 },
    price: { type: Number, required: true },
    price_default_discount: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 },
    sold: { type: Number, default: 0 },
    view: { type: Number, default: 0 }
  },
  {
    timestamps: true
    //     Tự động thêm hai trường:
    // createdAt: ngày tạo sản phẩm
    // updatedAt: ngày cập nhật gần nhất
    // Rất hữu ích khi cần hiển thị thời gian tạo/cập nhật.
  }
)
export const ProductModel = mongoose.model('products', productSchema)

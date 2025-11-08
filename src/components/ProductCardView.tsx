import { Product } from '../types/product';
import { Edit, Trash2, Tag } from 'lucide-react';

interface ProductCardViewProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
}

export default function ProductCardView({ products, onEdit, onDelete }: ProductCardViewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
              <span
                className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  product.isActive
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {product.isActive ? 'Active' : 'Inactive'}
              </span>
            </div>

            {product.description && (
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {product.description}
              </p>
            )}

            <div className="mb-4">
              <div className="text-2xl font-bold text-gray-900 mb-2">
                ₹{product.price.toLocaleString()}
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">
                  Stock: <span className="font-semibold">{product.stock}</span>
                </span>
                <span className="text-gray-400">ID: {product.id}</span>
              </div>
            </div>

            {product.tags && product.tags.length > 0 && (
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <Tag className="h-3 w-3 text-gray-400" />
                {product.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex space-x-2 pt-4 border-t border-gray-100">
              <button
                onClick={() => onEdit(product)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Edit className="h-4 w-4" />
                Edit
              </button>
              <button
                onClick={() => onDelete(product.id)}
                className="flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
      {products.length === 0 && (
        <div className="col-span-full text-center py-12 text-gray-500">
          No products found
        </div>
      )}
    </div>
  );
}

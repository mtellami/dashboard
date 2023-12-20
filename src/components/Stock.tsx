import Products from '../../static/Stock'

function Stock() {
  const elements = ['product', '', 'price', 'category']
	const light = 'bg-gray-100 text-gray-800'
	const dark = 'bg-gray-200 text-gray-800'

	return (
    <section className="p-4 text-2xl capitalize">
      <h1 className="capitalize m-4">Available Products</h1>
      <div className="overflow-auto text-center">
        <ul className="w-full rounded-md divide-y divide-gray-200">
          <li className="flex justify-between p-2 ml-6 uppercase text-xl">
            {elements.map((item, index) => (
              <span key={index} className="flex-1">{item}</span>
            ))}
          </li>
          {Products.map((product, index) => (
            <li key={index} className={`flex p-2 mr-6 items-center ${index % 2 ? light : dark} text-lg rounded mb-1`}>
              <img src={product.image} className="rounded-md w-16" alt={product.name} />
              <span className="flex-1">{product.name}</span>
              <span className={`flex-1 ${product.qte > 0 ? 'text-green-600' : 'text-red-500'}`}>
								{product.qte > 0 ? 'in stock' : 'out of stock'}
							</span>
              <span className="flex-1">${product.price}</span>
              <span className="flex-1">{product.category}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Stock;

function createOrder(items) {
  return {
    items,
    total: items.reduce((sum, i) => sum + i.price * i.qty, 0),
    status: 'pending',
  };
}

function applyDiscount(order, percent) {
  const discounted = order.total * (1 - percent / 100);
  return { ...order, total: discounted };
}

function cancelOrder(order) {
  return { ...order, status: 'cancelled', total: 0 };
}

function calculateLoyaltyPoints(orderAmount) {
<<<<<<< HEAD
  let points = orderAmount;

// Task 4: Clone A multiplier comment
  if (orderAmount > 100) {
    points = points * 1.5;
  }

  // Task 2: Round loyalty points calculation
  return Math.round(points);
=======
  // Task 2: Round points calculation
  let points = Math.round(orderAmount);
  return points;
>>>>>>> origin/feature/loyalty-points
}

module.exports = { calculateLoyaltyPoints };

module.exports = { calculateLoyaltyPoints };

module.exports = { createOrder, applyDiscount, cancelOrder, calculateLoyaltyPoints };

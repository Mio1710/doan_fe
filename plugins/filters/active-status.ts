const filters = {
  statusColor(input: any): string {
    if (input === 0) {
      return 'tw-text-[#333]'
    } else if (input > 0 && input < 100) {
      return 'tw-text-[#FB8C00]'
    } else if (input === 100) {
      return 'tw-text-[#4CAF50]'
    } else {
      return 'tw-text-[#333]'
    }
  },
  changeStatus(input: string): string {
    switch (input) {
      case 'ready':
        return 'tw-text-primary'
      case 'in-progress':
        return 'tw-text-[#ca9494]'
      case 'completed':
        return 'tw-text-[#4CAF50]'
      case 'on-time':
        return 'tw-text-[#4CAF50]'
      case 'on-hold':
        return 'tw-text-[#FB8C00]'
      case 'cancelled':
        return 'tw-text-[#FF5252]'
      case 'prepare':
        return 'tw-text-[#3b98b5]'
      default:
        return 'tw-text-[#333]'
    }
  },
  userTypeColor(type: string): string {
    switch (type) {
      case 'dispatcher':
        return 'success'
      case 'sales':
        return 'warning'
      case 'customer':
        return 'info'
      default:
        return 'error'
    }
  },
  statusProgress(actualQuantity: number, planQuantity: number): number {
    if (!actualQuantity || !planQuantity) {
      return 0
    }

    return ((actualQuantity / planQuantity) * 100).toFixed(0)
  },
  price(price: any): string {
    return price ? new Intl.NumberFormat('en-US').format(price) : '0'
  },
}

export default filters

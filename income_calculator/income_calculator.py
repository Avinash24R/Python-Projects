
class IncomeCalculator:
    def __init__(self):
        self.income_sources = {}

    def add_income(self, source, amount):
        self.income_sources[source] = amount

    def calculate_monthly_income(self):
        return sum(self.income_sources.values())

    def calculate_annual_income(self):
        return self.calculate_monthly_income() * 12

    def calculate_income_tax(self, annual_income):
        # Calculates tax based on the new income slabs.
        if annual_income <= 300000:
            return 0
        elif annual_income <= 700000:
            return (annual_income - 300000) * 0.05
        elif annual_income <= 1000000:
            return (400000 * 0.05) + (annual_income - 700000) * 0.10
        elif annual_income <= 1200000:
            return (400000 * 0.05) + (300000 * 0.10) + (annual_income - 1000000) * 0.15
        elif annual_income <= 1500000:
            return (400000 * 0.05) + (300000 * 0.10) + (200000 * 0.15) + (annual_income - 1200000) * 0.20
        else:
            return (400000 * 0.05) + (300000 * 0.10) + (200000 * 0.15) + (300000 * 0.20) + (annual_income - 1500000) * 0.30

    def get_income_sources(self):
        return self.income_sources